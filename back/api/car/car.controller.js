const carService = require('./car.service');
const reviewService = require('../review/review.service');

async function getCars(req, res) {
    console.log('Session Car: ', req.session.id);
    const cars = await carService.query();
    res.json(cars);
}

async function getCar(req, res) {
    const carId = req.params.carId;
    console.log(carId);

    const [car, reviews] = await Promise.all([
        carService.getById(carId),
        reviewService.query({ carId })
    ]);

    res.json({ car, reviews });
}

async function deleteCar(req, res) {
    const carId = req.params.carId;
    await carService.remove(carId);
    res.end(`Car ${carId} Deleted `);
}

async function addCar(req, res) {
    const car = req.body;
    const createdCar = await carService.add(car);
    res.json({ car: createdCar });
}

async function updateCar(req, res) {
    const car = req.body;
    const updatedCar = await carService.update(car);
    res.json({ car: updatedCar });
}

module.exports = {
    getCars,
    getCar,
    deleteCar,
    addCar,
    updateCar
};
