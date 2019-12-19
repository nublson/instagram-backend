// Definir routes como roteador (Router) da aplicação
const routes = require("express").Router();
const PostController = require("./controllers/PostController");

// Criar rota inicial para teste do app
routes.get("/", PostController.index);
routes.post("/posts", PostController.store);

// Exportar rotas
module.exports = routes;
