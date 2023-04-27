const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db.people', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;