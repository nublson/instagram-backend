const Post = require("../models/Post");

module.exports = {
    async store(req, res) {
        const { id } = req.params;

        // Procurar post pelo ID
        const post = await Post.findById(id);

        // Se não houver post com este ID
        if (!post) {
            return res.json({ error: "Post dont exists!" });
        }

        // Verificar se o post já tem like
        !post.likes ? (post.likes += 1) : (post.likes = 0);

        await post.save();
        return res.json(post);
    }
};
