const express = require('express');
const {
    getCars,
    getCar,
    addCar,
    updateCar,
    deleteCar
} = require('./car.controller');

const router = express.Router();

router.get('/', getCars);
router.get('/:carId', getCar);
router.delete('/:carId', deleteCar);
router.post('/', addCar);
router.put('/:carId', updateCar);

module.exports = router;
