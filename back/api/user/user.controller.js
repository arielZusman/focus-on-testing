const userService = require('./user.service');
const reviewService = require('../review/review.service');

async function getUser(req, res) {
    const user = await userService.getById(req.params.id);
    const reviews = await reviewService.getUserReviews(req.params.id);
    res.json({ user, reviews });
}

const getUsers = async (req, res) => {
    const users = await userService.query();
    res.send(users);
};

async function deleteUser(req, res) {
    await userService.remove(req.params.id);
    res.send({});
}

module.exports = {
    getUser,
    getUsers,
    deleteUser
};
