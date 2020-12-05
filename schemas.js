const Joi = require('joi');

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        title: Joi.string().required(),
        body: Joi.string().required(),
        rating: Joi.number().required().min(1).max(5)
    }).required()
});