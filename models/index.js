const dbConfig = require('../config/dbConfig')

const { Sequelize, DataType, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
    db.dbConfig.db,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialec: dbConfig.dialect,
        operatorsAliases: false,

        pool:{
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('Autenticação feita');
})
.catch((err) => {
    console.log('Error: ' + err);
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.alunos = require('./alunoModel.js')(sequelize, DataTypes)

db.sequelize.sync = ({ force: false})
.then(() => {
    console.log('Sincornização concluída');
})

module.exports = db