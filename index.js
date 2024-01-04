const express = require('express');
const connection = require('./database/database');
const app = express();
const bodyParser = require('body-parser');

const Espada = require('./models/Espada');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connection.authenticate().then(() => {
    console.log("Conectado com sucesso ao banco de dados!");
}).catch((err) => {
    console.log(`Erro: ${err}`)
})

app.listen(process.env.SERVER_PORT, () => {
    console.log('Servidor Rodando!');
})