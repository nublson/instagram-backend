// Definir routes como roteador (Router) da aplicação
const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/upload");
const PostController = require("./controllers/PostController");
const LikeController = require("./controllers/LikeController");

const upload = multer(multerConfig);

// Post routes
routes.get("/posts", PostController.index);
routes.post("/posts", upload.single("image"), PostController.store);

// Like route
routes.post("/posts/:id/like", LikeController.store);

// Exportar rotas
module.exports = routes;
