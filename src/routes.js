const routes = require("express").Router();

routes.get("/", (req, res) => res.json({ hello: "World!" }));

module.exports = routes;
