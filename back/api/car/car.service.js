const dbService = require('../../services/db.service');

const ObjectId = require('mongodb').ObjectId;

function query() {
    return dbService.connect().then(db => {
        const collection = db.collection('car');
        return collection.find({}).toArray();
    });
}

function remove(carId) {
    carId = new ObjectId(carId);
    return dbService.connect().then(db => {
        const collection = db.collection('car');
        return collection.remove({ _id: carId });
    });
}
function getById(carId) {
    carId = new ObjectId(carId);
    return dbService.connect().then(db => {
        const collection = db.collection('car');
        return collection.findOne({ _id: carId });
    });
}

function add(car) {
    return dbService.connect().then(db => {
        const collection = db.collection('car');
        return collection.insertOne(car).then(result => {
            car._id = result.insertedId;
            return car;
        });
    });
}

function update(car) {
    car._id = new ObjectId(car._id);
    return dbService.connect().then(db => {
        const collection = db.collection('car');
        return collection
            .updateOne({ _id: car._id }, { $set: car })
            .then(() => {
                return car;
            });
    });
}

module.exports = {
    query,
    remove,
    getById,
    add,
    update
};
