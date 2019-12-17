// jshint esversion: 6

const { get, getUser } = require('./get/users');
const { check, create } = require('./post/users');

const users = (server) => {

    get(server);
    getUser(server);
    check(server);
    create(server);

};

module.exports = users;
