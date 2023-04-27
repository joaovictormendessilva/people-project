const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const Person = db.define('Person', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },
    tel: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },
    age: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },
    occupation: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    }
})

module.exports = Person;