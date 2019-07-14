const express = require('express');
const requireAuth = require('../../middlewares/requireAuth.middleware');
const { getReviews, addReview } = require('./review.controller');

const router = express.Router();

router.get('/', getReviews);
router.post('/', requireAuth, addReview);

module.exports = router;
