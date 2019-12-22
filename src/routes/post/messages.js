// jshint esversion: 6

const { getNewConversationIdDB, createConversationDB } = require('../../database/messages');
const { checkConversationScheme } = require('../../global/validationSchemes');
const Joi = require('Joi');

const createConversation = (server) => {

    server.post('/api/conversations', (request, response) => {

        request.body.participants.first_participant_id = parseInt(request.body.participants.first_participant_id);
        request.body.participants.second_participant_id = parseInt(request.body.participants.second_participant_id);
        const result = Joi.validate(request.body, checkConversationScheme);

        result.then(() => {

            getNewConversationIdDB((err, result) => {

                if(err) {

                    response.status(400).send(err.errmsg);
                    return;

                }

                request.body.conversation_id = result;
                request.body.messages = [];

                createConversationDB(request.body, (err, result) => {

                    if(err) {

                        response.status(500).send(err.errmsg);
                        return;

                    }

                    response.status(200).send(JSON.stringify(result));

                });

            });

        }).catch(() => {

            response.status(400).send(result.error.details[0].message);

        });

    });

};

module.exports.createConversation = createConversation;
