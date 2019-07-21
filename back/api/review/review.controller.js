const reviewService = require('./review.service');

async function getReviews(req, res) {
    const reviews = await reviewService.query(req.query);
    res.json(reviews);
}

async function addReview(req, res) {
    const reviewData = {
        // userId: req.session.userId
        userId: req.body.userId,
        carId: req.body.carId,
        content: req.body.content
    };
    const review = await reviewService.addReview(reviewData);
    res.json(review);
}

module.exports = {
    getReviews,
    addReview
};
