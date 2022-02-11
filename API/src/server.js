//serve para ler o arquivo de variavel de ambiente
require('dotenv').config({ path: 'variaveis.env' });
const express = require('express');
//especificação para trabalhar com API, acesso a recursos
const cors = require('cors');
//modulo de conversao de uma requisição em outro formato
const bodyParser = require('body-parser');


const routes = require('./routes');
const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));

server.use('/api', routes);

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});