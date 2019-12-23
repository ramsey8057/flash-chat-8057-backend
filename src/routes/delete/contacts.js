// jshint esversion: 6

const { deleteContactDB } = require('../../database/contacts');

const deleteContact = (server) => {

    server.delete('/api/contacts/:user_id/delete/:contact_id', (request, response) => {

        deleteContactDB(parseInt(request.params.user_id), parseInt(request.params.contact_id), (err, result) => {

            if(!err) {

                if(result.result.nModified !== 0) {

                    response.status(200).send(JSON.stringify(result));
                    return;

                }

                response.status(404).send('This user or the contact was not found');
                return;

            }

            response.status(404).send(err.errmsg);

        });

    });

};

module.exports.deleteContact = deleteContact;
