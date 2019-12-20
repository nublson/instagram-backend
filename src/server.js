const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
require("dotenv/config"); // Importar dotenv para acessar variáveis ambientes

const port = process.env.PORT || 3333;
const dbUrl = process.env.MONGO_URL;
const app = express(); // Iniciando aplicação
app.use(express.json()); // Permitir leitura de dados em json

// Criar rota estática para visualizar imagens
app.use(
    "/files",
    express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

// Iniciar conexão com o Banco de dados
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(routes); // Acessar arquivo de rotas

// Configurar porta a ser ouvida
app.listen(port, () => console.log(`Port ${port} is open!`));
