// jshint esversion: 6

const { get, getUser } = require('./get/users');
const { check } = require('./post/users');

const users = (server) => {

    get(server);
    getUser(server);
    check(server);

};

module.exports = users;
