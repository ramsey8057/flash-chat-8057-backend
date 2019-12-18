// jshint esversion: 6

const { deleteUserDB } = require('../../database/users');
const { deleteUserScheme } = require('../../global/validationSchemes');
const Joi = require('joi');

const deleteUser = (server) => {

    server.delete('/api/users/delete/:email', (request, response) => {
        
        const result = Joi.validate(deleteUserScheme);
        result.then(() => {

            deleteUserDB(request.params.email, (err, res) => {

                if(err || res.result.n === 0) {

                    response.status(404).send('The user with the given email and password was not found');
                    return;

                }
                
                response.status(200).send(res);

            });

        }).catch(() => {

            response.status(400).send(result.error.details[0].message);

        });

    });

};

module.exports.deleteUser = deleteUser;
