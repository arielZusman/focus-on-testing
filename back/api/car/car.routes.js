const express = require('express');
const {
    getCars,
    getCar,
    createCar,
    updateCar,
    deleteCar
} = require('./car.controller');
const router = express.Router();

router.get('/', getCars);
router.get('/:id', getCar);
router.delete('/:id', deleteCar);
router.post('/', createCar);
router.put('/:id', updateCar);

module.exports = router;
