// jshint esversion: 6

const Joi = require('Joi');
const checkPasswordScheme = Joi.object({
    email: Joi.string().min(5).required(),
    password: Joi.string().min(8).required(),
});

exports.checkPasswordScheme = checkPasswordScheme;
