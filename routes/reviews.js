const express = require('express');
const router = express.Router();

const Review = require('../models/review');
const { reviewSchema } = require('../schemas.js');

const ExpressError = require('../ExpressError');

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

router.get('/', async (req, res) =>{
    const reviews = await Review.find({}).populate();
    try{
        res.render('index', { reviews });
    }
    catch(e) {
        res.status(404).send();
    }
});

router.post('/review', validateReview, async(req, res, next)=>{
    const review = new Review(req.body.review);
    try{
        await review.save();
        //res.redirect(`/`);
    } catch (e) {
        res.status(404).send(e);
    }
});


module.exports = router;