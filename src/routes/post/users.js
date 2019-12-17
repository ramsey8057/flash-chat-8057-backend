// jshint esversion: 6

const { checkPassword, createUser, getNewId } = require('../../database/users');
const { checkPasswordScheme, checkUserScheme } = require('../../global/validationSchemes');
const Joi = require('Joi');

const create = (server) => {

    server.post('/api/users/create', (request, response) => {

        const result = Joi.validate(request.body, checkUserScheme);
        result.then(() => {

            getNewId((err, result) => {

                if(err) {

                    response.status(500).send(err.errmsg);
                    return;

                }

                request.body.user_id = result;
                request.body.user_subscription_date = new Date();
                request.body.user_dob = new Date(request.body.user_dob);
                request.body.user_is_active = true;
                createUser(request.body, (err, result) => {

                    if(!err) {

                        response.status(200).send(result);

                    } else {

                        response.status(400).send(err.errmsg);

                    }

                });

            });

        }).catch(() => {

            response.status(400).send(result.error.details[0].message);

        });

    });

};

const check = (server) => {

    server.post('/api/users', (request, response) => {

        const result = Joi.validate(request.body, checkPasswordScheme);
        result.then(() => {

            checkPassword(request.body.email, request.body.password, (err, result) => {

                if(!err) {

                    if(result.length !== 0) {

                        response.status(200).send(result);

                    } else {

                        response.status(404).send('The user with the given email and password is not available');

                    }

                } else {

                    response.send(400).send(err.errmsg);

                }

            });

        }).catch(() => {

            response.status(400).send(result.error.details[0].message);

        });

    });

};

exports.check = check;
exports.create = create;
