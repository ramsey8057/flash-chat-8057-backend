// jshint esversion: 6

const Joi = require('Joi');
const checkPasswordScheme = Joi.object({
    email: Joi.string().min(5).required(),
    password: Joi.string().min(8).required(),
});

const checkUserScheme = Joi.object({
    user_first_name: Joi.string().min(3).required(),
    user_last_name: Joi.string().min(3).required(),
    user_email: Joi.string().min(5).required(),
    user_password: Joi.string().min(8).max(25).required(),
    user_dob: Joi.date().less(new Date((new Date() - (24 * 60 * 60 * 1000 * 30 * 12) * 11))).required(),
});

exports.checkPasswordScheme = checkPasswordScheme;
exports.checkUserScheme = checkUserScheme;
