const mongoose = require("mongoose");

// Criar Schema do Post
const PostSchema = new mongoose.Schema(
    {
        author: String, // Autor do post
        place: String, // Lugar onde o Post foi feito
        description: String, // Descrição do post
        hashtags: String, // hashtags
        image: String, // imagem
        likes: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
