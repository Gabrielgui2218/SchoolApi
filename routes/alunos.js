const controllers = require('../controllers/alunoController')

const router = require('express').Router()

router.post('/aluno', controllers.addAluno)

router.get('/aluno', controllers.getAllAlunos)

router.get('/aluno/:id', controllers.getOneAluno)

router.put('aluno/:id', controllers.updateAluno)

router.delete('aluno/:id', controllers.deletaAluno)

module.exports = router