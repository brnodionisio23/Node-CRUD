const Sequelize = require('sequelize');
const connection = require('../database/database');

const Espada = connection.define('espada', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dano: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    elemento: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Espada.sync({ force: false });

module.exports = Espada;