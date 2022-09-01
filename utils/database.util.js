const {Sequelize, Datatypes} = require('sequelize')

const db = new Sequelize ({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '2811ma',
    port: 5432,
    database: 'CheckIn-CheckOut',
    logging: false
}) 

module.exports = {db, Datatypes};