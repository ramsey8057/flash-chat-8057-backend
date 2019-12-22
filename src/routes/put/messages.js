// jshint esversion: 6

const { sendMessageDB } = require('../../database/messages');
const { checkMessageScheme } = require('../../global/validationSchemes');
const Joi = require('joi');

const sendMessage = (server) => {

    server.put('/api/messages', (request, response) => {

        if(request.query.first_participant_id != null && request.query.second_participant_id != null) {

            const result = Joi.validate(request.body, checkMessageScheme);
            result.then(() => {

                request.body.time_created = new Date(request.body.time_created);

                sendMessageDB(
                    parseInt(request.query.first_participant_id),
                    parseInt(request.query.second_participant_id),
                    request.body,
                    (err, result) => {

                        if(err) {
                            response.status(500).send(err.errmsg);
                            return;
                        }

                        if(result.result.nModified !== 0) {

                            response.status(200).send(JSON.stringify(result));

                        } else {

                            response.status(404).send('The conversation is not created yet');

                        }

                    }
                );

            }).catch(() => {

                response.status(400).send(result.error.details[0].message);

            });

        } else {

            response.status(400).send('first_participant_id and second_participant_id should be identified in the request');

        }

    });

};

module.exports.sendMessage = sendMessage;
