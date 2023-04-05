const express = require('express')
const router = require('./routes/alunos.js')
const cors = require(cors())

var corOptions = {
    origin: 'https://localhost:8080'
}

app.use(express())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors(corOptions))

app.use(router)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
})


