const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port, () => console.log(`Port ${port} is open!`));
