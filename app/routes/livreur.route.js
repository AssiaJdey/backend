const express = require('express')
const livreurController = require('../controllers/livreur.controller.js')
const router = express.Router();

router.get('/', livreurController.findAll);
router.get('/:id', livreurController.findOne);
router.post('/', livreurController.create);
router.patch('/:id', livreurController.update);
router.delete('/:id', livreurController.destroy);

module.exports = router