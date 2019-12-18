// jshint esversion: 6

const { get, getUser } = require('./get/users');
const { check, create } = require('./post/users');
const { updateFirstName, updateLastName } = require('./put/users');

const users = (server) => {

    get(server);
    getUser(server);
    check(server);
    create(server);
    updateFirstName(server);
    updateLastName(server);

};

module.exports = users;
