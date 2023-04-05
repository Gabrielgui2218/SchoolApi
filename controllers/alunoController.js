const db = require('../models')

const alunos = db.alunos

const addAluno = async (req, res) =>{
    let info = {
        id: req.body.id,
        nome: req.body.nome,
        cpf: req.body.cpf,
        idade: req.body.idade
    }

    const aluno = await alunos.create(info)
    res.send(201).sendo(aluno)
}

const getAllAlunos = async (req, res) => {

    let allAlunos = await alunos.findAll({})

    res.status(200).send(allAlunos)
}

const getOneAluno = async(req, res) => {
    let id = req.params.id
    let aluno = await alunos.findOne({where: {id: id}})
    res.status(200).json({ message: `O aluno com o id ${id} é o ${aluno}`})
}

const updateAluno = async(req, res) => {
    let id = req.params.id
    let aluno = await alunos.update(req.body, { where: {id: id}})

    res.status(200).send(`Aluno com o id ${id} atualizado com sucesso`)
}

const deletaAluno = async(req, res) => {
    let id = req.params.id
    let aluno = await alunos.destroy({ where: id})

    res.status(200).json({ message: `Aluno com o id ${id} deletado com sucesso`})
}

module.exports = {
    getAllAlunos,
    getOneAluno,
    updateAluno,
    deletaAluno,
    addAluno
}