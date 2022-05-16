const express = require('express')
const restaurantController = require('../controllers/restaurant.controller.js')
const router = express.Router();

router.get('/', restaurantController.findAll);
router.get('/:id', restaurantController.findOne);
router.post('/', restaurantController.create);
router.patch('/:id', restaurantController.update);
router.delete('/:id', restaurantController.destroy);

module.exports = router