const Joi = require("joi");

module.exports.bookSchema = Joi.object({
    book: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().allow(""),
        price: Joi.number().required().min(0),
        coverimage: Joi.string().required(),
        // indeximage: Joi.string().required(),
        // insideimage: Joi.string().required(),
        author: Joi.string().allow(""),
        category: Joi.string().required(),
    }).required(),
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        comment: Joi.string().required(),
        rating: Joi.number().required().min(1).max(5),
    }).required(),
});

