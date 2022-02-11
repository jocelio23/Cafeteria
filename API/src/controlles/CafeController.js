const { json } = require('body-parser');
const res = require('express/lib/response');
const CafeService = require('../services/CafeService');



module.exports = {
    buscarTodos: async(req, res) => {
        let json = { error: '', result: [] };
        let cafe = await CafeService.buscarTodos();


        for (let i in cafe) {
            json.result.push({
                codigo: cafe[i].codido,
                nome: cafe[i].nome,
                preco: cafe[i].preco,
                end_img: cafe[i].end_img
            });
            res.json(json);
        }

    },


    buscarPor: async(req, res) => {
        let json = { error: '', result: {} };
        let codigo = req.params.codigo;
        let cafe = await CafeService.buscarPor(codigo);

        if (cafe) {
            json.result = cafe;
        }
        res.json(json);
    },

    inserir: async(req, res) => {
        let json = { error: '', result: {} };

        let nome = req.body.nome;
        let preco = req.body.preco;
        let end_img = req.body.end_img;

        if (nome && preco && end_img) {
            let cafeCodigo = await CafeService.inserir(nome, preco, end_img);
            json.result = {
                codido: cafeCodigo,
                nome,
                preco,
                end_img
            };
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterar: async(req, res) => {
        let json = { error: '', result: {} };

        let codigo = req.params.codigo;
        let nome = req.body.nome;
        let preco = req.body.preco;
        let end_img = req.body.end_img;

        if (codigo && nome && preco && end_img) {
            await CafeService.alterar(codigo, nome, preco, end_img);
            json.result = {
                codigo,
                nome,
                preco,
                end_img
            };
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },


    apagar: async(req, res) => {
        let json = { error: '', result: {} };

        await CafeService.apagar(req.params.codigo);
        res.json(json);
    },



}