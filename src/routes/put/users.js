// jshint esversion: 6

const { updateFirstNameDB, updateLastNameDB } = require('../../database/users');
const { updateNameScheme } = require('../../global/validationSchemes');
const Joi = require('Joi');

const updateFirstName = (server) => {

    server.put('/api/users/update/first_name', (request, response) => {

        const result = Joi.validate(request.body, updateNameScheme);
        result.then(() => {

            updateFirstNameDB(request.body.email, request.body.password, request.body.name, (err, res) => {

                if(err || (res.result.nModified === 0)) {
                    
                    response.status(404).send('The user with the given email and password was not found');
                    return;

                }
                
                response.status(200).send(JSON.stringify(res));

            });

        }).catch(() => {

        });

    });

};

const updateLastName = (server) => {

    server.put('/api/users/update/last_name', (request, response) => {

        const result = Joi.validate(request.body, updateNameScheme);
        result.then(() => {

            updateLastNameDB(request.body.email, request.body.password, request.body.name, (err, res) => {

                if(err || (res.result.nModified === 0)) {
                    
                    response.status(404).send('The user with the given email and password was not found');
                    return;

                }
                
                response.status(200).send(JSON.stringify(res));

            });

        }).catch(() => {

        });

    });

};

module.exports.updateFirstName = updateFirstName;
module.exports.updateLastName = updateLastName;
