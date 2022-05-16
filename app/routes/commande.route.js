const express = require('express')
const commandeController = require('../controllers/commande.controller.js')
const router = express.Router();

router.get('/', commandeController.findAll);
router.get('/:id', commandeController.findOne);
router.post('/', commandeController.create);
router.patch('/:id', commandeController.update);
router.delete('/:id', commandeController.destroy);

module.exports = router