const express = require('express');
const router = express.Router();

const PersonController = require('../controllers/PersonController');

// Delete
router.post('/delete/:id', PersonController.deletePerson);
// Edit
router.post('/edit/update', PersonController.editPersonPost);
router.get('/edit/:id', PersonController.editPersonGet);
// Create
router.post('/create', PersonController.createPerson);
// Main
router.get('/', PersonController.allPeople);

module.exports = router;