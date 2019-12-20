const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");
require("dotenv/config"); // Importar dotenv para acessar variáveis ambientes

const port = process.env.PORT || 3333;
const dbUrl = process.env.MONGO_URL;

const app = express(); // Iniciando aplicação

// Configurar express para usar o protocolo HTTP
const server = require("http").Server(app);
// Configurar uso do protocolo Web-Socket
const io = require("socket.io")(server);

// Iniciar conexão com o Banco de dados
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Criar um custom middleware para partilhar o io por toda a aplicação
app.use((req, res, next) => {
    req.io = io; // Enviar io pra todas as rotas

    next(); // Garantir que as próximas rotas executem após esta
});

/* À partir deste momento, toda rota ou requisição que seja feita depois do
nosso custom middleware terá acesso à informação enviada pelo nosso custom
middleware */

app.use(cors());
app.use(express.json()); // Permitir leitura de dados em json

// Criar rota estática para visualizar imagens
app.use(
    "/files",
    express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

app.use(routes); // Acessar arquivo de rotas

// Configurar porta a ser ouvida
server.listen(port, () => console.log(`Port ${port} is open!`));
