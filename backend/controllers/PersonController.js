const Person = require("../models/Person");
const Address = require('../models/Address');

const { Op } = require('sequelize');

module.exports = class PersonController{

    static async deletePerson(req, res){

        const id = req.params.id;

        const deletedAddress = await Address.destroy({where: {PersonId: id}});
        const deletedPerson = await Person.destroy({where: {id: id}});

        if (deletedAddress > 0 || deletedPerson > 0) {
            res.status(204).send();
        }

    }

    static async editPersonPost(req, res){

        const id = req.body.id;

        const person = {
            name: req.body.name,
            email: req.body.email,
            tel: req.body.tel,
            age: req.body.age,
            occupation: req.body.occupation
        }

        const address = {
            road: req.body.road,
            number: req.body.number,
            city: req.body.city,
            PersonId: id
        }

        const addressExist = await Address.findOne({raw: true, where:{PersonId : id}})

        if (addressExist) {
            await Person.update(person, {where: { id : id}});
            await Address.update(address, {where: {PersonId: id}});
        }else if(!addressExist && address.road !== null || address.number !== null || address.city !== null){
            await Person.update(person, {where: { id : id}});
            await Address.create(address);
        }else{
            await Person.update(person, {where: { id : id}});
        }

    }

    static async editPersonGet(req, res){

        const id = req.params.id;

        const person = await Person.findAll({
            include: Address,
            raw: true,
            nest: true,
            where: {
                id: id
            }
        });

        res.send(person[0]);

    }
    
    static async createPerson(req, res) {

        const person = {
            name: req.body.name,
            email: req.body.email,
            tel: req.body.tel,
            age: req.body.age,
            occupation: req.body.occupation
        }

        const personCreated = await Person.create(person);

        res.send(personCreated)

    }
    
    static async allPeople(req, res) {

        const people = await Person.findAll({
            raw: true
        });
        
        res.send(people);

    }

};