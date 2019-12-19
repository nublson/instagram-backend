// Definir routes como roteador (Router) da aplicação
const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/upload");
const PostController = require("./controllers/PostController");

const upload = multer(multerConfig);

// Criar rota inicial para teste do app
routes.get("/posts", PostController.index);
routes.post("/posts", upload.single("image"), PostController.store);

// Exportar rotas
module.exports = routes;
