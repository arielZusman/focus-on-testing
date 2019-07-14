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
router.get('/:id', getCar);
router.delete('/:id', deleteCar);
router.post('/', addCar);
router.put('/:id', updateCar);

module.exports = router;
