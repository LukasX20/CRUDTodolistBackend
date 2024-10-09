const express = require('express');
const router = express.Router();    
const tarefasController = require('../controller/tarefasContoller');

router.get('/', tarefasController.listarTarefas);
router.get('/:id', tarefasController.listarPorId);
router.delete('/:id', tarefasController.deletarTarefa);
router.post('/', tarefasController.adicionarTarefa);
module.exports = router;