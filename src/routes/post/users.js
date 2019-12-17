// jshint esversion: 6

const { checkPassword } = require('../../database/users');
const { checkPasswordScheme } = require('../../global/validationSchemes');

const check = (server) => {

    const Joi = require('Joi');

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

                    response.send(500).send('There is an error in the server');

                }

            });

        }).catch(() => {

            response.status(400).send(result.error.details[0].message);

        });

    });

};

exports.check = check;
