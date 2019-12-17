const { all, withId } = require('../../database/users');

const get = (server) => {

    server.get('/api/users', (request, response) => {

        all((err, users) => {
            if(!err) {

                response.status(200).send(JSON.stringify(users));

            } else {

                response.status(500).send('There is an error in the server');

            }
        });

    });

};

const getUser = (server) => {

    server.get('/api/users/:email', (request, response) => {
        withId(request.params.email.toString(), (err, user) => {

            if(!err) {

                if(user.length !== 0) {

                    response.status(200).send(JSON.stringify(user));

                } else {

                    response.status(404).send('The user with the given email isn\'t available');

                }

            } else {

                response.status(500).send('There is an error in the server');

            }

        });
    });

};

exports.get = get;
exports.getUser = getUser;
