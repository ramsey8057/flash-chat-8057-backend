// jshint esversion: 6

const { get, getUserAllMessages } = require('./get/messages');
const { sendMessage } = require('./put/messages');
const { createConversation } = require('./post/messages');

const messages = (server) => {

    get(server);
    getUserAllMessages(server);
    sendMessage(server);
    createConversation(server);

};

module.exports = messages;
