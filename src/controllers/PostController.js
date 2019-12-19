const Post = require("../models/Post");

module.exports = {
    // List all posts
    async index(req, res) {
        const {} = req.body;
    },
    // Create new posts
    async store(req, res) {
        return res.json({ ok: true });
    }
};
