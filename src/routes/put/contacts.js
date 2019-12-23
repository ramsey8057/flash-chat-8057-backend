// jshint esversion: 6

const { addUserContactDB } = require('../../database/contacts');

const addUserContact = (server) => {

    server.put('/api/contacts/:user_id/add/:contact_id', (request, response) => {

        addUserContactDB(parseInt(request.params.user_id), parseInt(request.params.contact_id), (err, result) => {

            if(!err) {

                if(result.result.nModified !== 0) {

                    response.status(200).send(JSON.stringify(result));
                    return;

                }

                response.status(404).send('This user with the specified id was not found');
                return;

            }

            response.status(404).send(err.errmsg);

        });

    });

};

module.exports.addUserContact = addUserContact;
