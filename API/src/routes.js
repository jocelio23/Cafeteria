//é um framework
//quando uma rota for executada a gente chama a rota
const express = require('express');
const { route } = require('express/lib/application');

//usado para controlar rota
const router = express.Router();

const CafeController = require('./controlles/CafeController');

router.get('/cafes', CafeController.buscarTodos);
router.get('/cafe/:codigo', CafeController.buscarPor);
router.post('/produto', CafeController.inserir);
router.put('/consulta/:codigo', CafeController.alterar);
router.delete('/delete/:codigo', CafeController.apagar);

module.exports = router;