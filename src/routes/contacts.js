// jshint esversion: 6

const { getUserContacts } = require('./get/contacts');
const { addUserContact } = require('./put/contacts');
const { deleteContact } = require('./delete/contacts');

const contacts = (server) => {

    getUserContacts(server);
    addUserContact(server);
    deleteContact(server);

};

module.exports = contacts;
