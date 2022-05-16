const express = require('express')
const clientController = require('../controllers/client.controller.js')
const router = express.Router();

router.get('/', clientController.findAll);
router.get('/:id', clientController.findOne);
router.post('/', clientController.create);
router.patch('/:id', clientController.update);
router.delete('/:id', clientController.destroy);

module.exports = router