// jshint esversion: 6

const { updateFirstNameDB, updateLastNameDB, updateEmailDB, updatePasswordDB, disableUserDB, enableUserDB } = require('../../database/users');
const { updateNameScheme, updateEmailScheme, updatePasswordScheme, checkPasswordScheme } = require('../../global/validationSchemes');
const Joi = require('joi');

const updateFirstName = (server) => {

    server.put('/api/users/update/first_name', (request, response) => {

        const result = Joi.validate(request.body, updateNameScheme);
        result.then(() => {

            updateFirstNameDB(request.body.email, request.body.password, request.body.name, (err, res) => {

                if(err || (res.result.n === 0)) {

                    response.status(404).send('The user with the given email and password was not found');
                    return;

                }

                response.status(200).send(JSON.stringify(res));

            });

        }).catch(() => {

            response.status(400).send(result.error.details[0].message);

        });

    });

};

const updateLastName = (server) => {

    server.put('/api/users/update/last_name', (request, response) => {

        const result = Joi.validate(request.body, updateNameScheme);
        result.then(() => {

            updateLastNameDB(request.body.email, request.body.password, request.body.name, (err, res) => {

                if(err || (res.result.n === 0)) {

                    response.status(404).send('The user with the given email and password was not found');
                    return;

                }

                response.status(200).send(JSON.stringify(res));

            });

        }).catch(() => {

            response.status(400).send(result.error.details[0].message);

        });

    });

};

const updateEmail = (server) => {

    server.put('/api/users/update/email', (request, response) => {

        const result = Joi.validate(request.body, updateEmailScheme);
        result.then(() => {

            updateEmailDB(request.body.email, request.body.password, request.body.new_email, (err, res) => {

                if(err || (res.result.n === 0)) {

                    response.status(404).send('The user with the given email and password was not found');
                    return;

                }

                response.status(200).send(JSON.stringify(res));

            });

        }).catch(() => {

            response.status(400).send(result.error.details[0].message);

        });

    });

};

const updatePassword = (server) => {

    server.put('/api/users/update/password', (request, response) => {

        const result = Joi.validate(request.body, updatePasswordScheme);
        result.then(() => {

            updatePasswordDB(request.body.email, request.body.password, request.body.new_password, (err, res) => {

                if(err || (res.result.n === 0)) {

                    response.status(404).send('The user with the given email and password was not found');
                    return;

                }

                response.status(200).send(JSON.stringify(res));

            });

        }).catch(() => {

            response.status(400).send(result.error.details[0].message);

        });

    });

};

const disableUser = (server) => {

    server.put('/api/users/update/disable', (request, response) => {

        const result = Joi.validate(request.body, checkPasswordScheme);
        result.then(() => {

            disableUserDB(request.body.email, request.body.password, (err, res) => {

                if(err || (res.result.n === 0)) {

                    response.status(404).send('The user with the given email and password was not found');
                    return;

                }

                response.status(200).send(JSON.stringify(res));

            });

        }).catch(() => {

            response.status(400).send(result.error.details[0].message);

        });

    });

};

const enableUser = (server) => {

    server.put('/api/users/update/enable', (request, response) => {

        const result = Joi.validate(request.body, checkPasswordScheme);
        result.then(() => {

            enableUserDB(request.body.email, request.body.password, (err, res) => {

                if(err || (res.result.n === 0)) {

                    response.status(404).send('The user with the given email and password was not found');
                    return;

                }

                response.status(200).send(JSON.stringify(res));

            });

        }).catch(() => {

            response.status(400).send(result.error.details[0].message);

        });

    });

};

module.exports.updateFirstName = updateFirstName;
module.exports.updateLastName = updateLastName;
module.exports.updateEmail = updateEmail;
module.exports.updatePassword = updatePassword;
module.exports.disableUser = disableUser;
module.exports.enableUser = enableUser;
