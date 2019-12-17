const { get, getUser } = require('./get/users');

const users = (server) => {

    get(server);
    getUser(server);

};

module.exports = users;
