// jshint esversion: 6

const { getUserContactsDB } = require('../../database/contacts');

const getUserContacts = (server) => {

    server.get('/api/contacts/:user_id', (request, response) => {

        getUserContactsDB(parseInt(request.params.user_id), (err, result) => {

            if(!err) {

                response.status(200).send(JSON.stringify(result));
                return;

            }

            response.status(404).send(err.errmsg);

        });

    });

};

module.exports.getUserContacts = getUserContacts;
