// jshint esversion: 6

const Joi = require('joi');
const checkPasswordScheme = Joi.object({
    email: Joi.string().min(5).required(),
    password: Joi.string().min(8).required(),
});

const checkUserScheme = Joi.object({
    user_first_name: Joi.string().min(3).required(),
    user_last_name: Joi.string().min(3).required(),
    user_email: Joi.string().min(5).required(),
    user_password: Joi.string().min(8).required(),
    user_dob: Joi.date().less(new Date((new Date() - (24 * 60 * 60 * 1000 * 30 * 12) * 10))).required(),
});

const updateNameScheme = Joi.object({
    email: Joi.string().min(5).required(),
    password: Joi.string().min(8).required(),
    name: Joi.string().min(3).required(),
});

const updateEmailScheme = Joi.object({
    email: Joi.string().min(5).required(),
    password: Joi.string().min(8).required(),
    new_email: Joi.string().min(5).required(),
});

const updatePasswordScheme = Joi.object({
    email: Joi.string().min(5).required(),
    password: Joi.string().min(8).required(),
    new_password: Joi.string().min(8).required(),
});

const deleteUserScheme = Joi.object({

    email: Joi.string().min(5).required(),
    password: Joi.string().min(8).required(),

});

const checkMessageScheme = Joi.object({

    sender_email: Joi.string().min(5).required(),
    content: Joi.string().required(),
    time_created: Joi.date().required(),

});

const checkConversationScheme = Joi.object({

    participants: Joi.object().keys({
        first_participant_id: Joi.number().integer().required(),
        second_participant_id: Joi.number().integer().required(),
    }).required(),

});

module.exports.checkPasswordScheme = checkPasswordScheme;
module.exports.checkUserScheme = checkUserScheme;
module.exports.updateNameScheme = updateNameScheme;
module.exports.updateEmailScheme = updateEmailScheme;
module.exports.updatePasswordScheme = updatePasswordScheme;
module.exports.deleteUserScheme = deleteUserScheme;
module.exports.checkMessageScheme = checkMessageScheme;
module.exports.checkConversationScheme = checkConversationScheme;
