// Definir routes como roteador (Router) da aplicação
const routes = require("express").Router();

// Criar rota inicial para teste do app
routes.get("/", (req, res) => res.json({ hello: "World!" }));

// Exportar rotas
module.exports = routes;
