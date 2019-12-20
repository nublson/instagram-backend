const Post = require("../models/Post");
const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

module.exports = {
    // List all posts
    async index(req, res) {
        // Procurar todos os posts e sortear em ordem decrescente
        const posts = await Post.find().sort("-createdAt");

        return res.json(posts);
    },
    // Create new posts
    async store(req, res) {
        // Acessando dados enviados no corpo da requisição
        const { author, place, description, hashtags } = req.body;
        // Acessando filename como image
        const { filename: image } = req.file;

        // Alterar formato da imagem para jpg
        const [name] = image.split(".");
        const fileName = `${name}.jpg`;

        // Fazer redimensionamento da imagem
        await sharp(req.file.path)
            .resize(500)
            .jpeg({ quality: 70 })
            .toFile(path.resolve(req.file.destination, "resized", fileName));

        // Apagar foto original
        fs.unlinkSync(req.file.path);
        // Criar post
        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: fileName
        });

        // Quando um novo post for criado, vamos EMITÍ-LO por toda a app
        // A função emit recebe o nome da informação a ser enviada (pode ser qualquer nome) e os dados da informação
        req.io.emit("post", post);
        return res.json(post);
    }
};
