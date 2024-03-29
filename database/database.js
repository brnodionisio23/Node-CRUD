require('dotenv').config();

const Sequelize = require('sequelize');

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME,
    process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    // logging: false
})

module.exports = connection;