// jshint esversion: 6

const { getMessagesByParticipantsDB, getUserAllMessagesDB } = require('../../database/messages');

const get = (server) => {

    server.get('/api/messages', (request, response) => {

        if(request.query.first_participant_id === null || request.query.second_participant_id == null) {

            response.status(500).send('first_participant_id and second_participant_id should be identified in the request');
            return;

        }

        getMessagesByParticipantsDB(
            parseInt(request.query.first_participant_id),
            parseInt(request.query.second_participant_id),
            (err, result) => {
                if(err) {
                    response.status(500).send(err.errmsg);
                    return;
                }
                response.status(200).send(JSON.stringify(result[0].messages));
            },
        );

    });

};

const getUserAllMessages = (server) => {

    server.get('/api/messages/:user_id', (request, response) => {

        getUserAllMessagesDB(parseInt(request.params.user_id), (err, result) => {

            if(err) {
                response.status(404).send(err.errmsg);
                return;
            }

            response.status(200).send(JSON.stringify(result));

        });

    });

};

module.exports.get = get;
module.exports.getUserAllMessages = getUserAllMessages;
