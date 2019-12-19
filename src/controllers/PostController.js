const Post = require("../models/Post");

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

        // Criar post
        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image
        });

        return res.json(post);
    }
};