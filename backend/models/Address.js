const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const Person = require('./Person');

const Address = db.define('Address', {

    road: {
        type: DataTypes.STRING
    },
    number: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    }

})

Person.hasMany(Address);
Address.belongsTo(Person);

module.exports = Address;