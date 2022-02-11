const db = require('../db');
module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM produtos', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarPor: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM produtos WHERE codido = ?', [codigo], (error, results) => {
                if (error) { rejeitado(error); return; }
                if (results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },

    inserir: (nome, preco, end_img) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO produtos (nome,preco,end_img) values (?,?,?)', [nome, preco, end_img], (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results.insertCodigo);
            });
        });
    },


    alterar: (codigo, nome, preco, end_img) => {
        return new Promise((aceito, rejeitado) => {

            db.query('UPDATE produtos SET nome = ?, preco = ?, end_img = ? WHERE codido = ?', [nome, preco, end_img, codigo],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },

    apagar: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM produtos WHERE codido = ?', [codigo], (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

};