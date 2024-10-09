const  database = require('../config/connection');


const listarTarefas = async (req, res) => {
    let dados = await database.executar(`SELECT * FROM  tarefas`);
    res.send(dados);
}
const listarPorId = async (req, res) => {
    let id = req.params.id;
    let dados = await database.executar(`SELECT * FROM tarefas WHERE id = ${id}`);
    res.send(dados);
}

const deletarTarefa = async (req, res) => {
    let id = req.params.id;
    let dados = await database.executar(`DELETE FROM tarefas WHERE id = ${id}`);
    res.status(204).send(`tarefa deletada com sucesso`)
}

const adicionarTarefa = async (req, res) => {
    const {nomeDoResponsavel, descricao, statusTarefa}
    = req.body;
   
    let dados = await database.executar(`INSERT INTO tarefas (nomeDoResponsavel, descricao, statusTarefa) VALUES ('${nomeDoResponsavel}', '${descricao}', '${statusTarefa}')`);
    res.status(201).send(`tarefa adicionada com sucesso`)
}



module.exports ={listarTarefas, listarPorId, deletarTarefa, adicionarTarefa};