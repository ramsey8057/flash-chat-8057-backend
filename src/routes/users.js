// jshint esversion: 6

const { get, getUser } = require('./get/users');
const { check, create } = require('./post/users');
const { updateFirstName, updateLastName, updateEmail, updatePassword } = require('./put/users');
const { deleteUser } = require('./delete/users');

const users = (server) => {

    get(server);
    getUser(server);
    check(server);
    create(server);
    updateFirstName(server);
    updateLastName(server);
    updateEmail(server);
    updatePassword(server);
    deleteUser(server);

};

module.exports = users;
