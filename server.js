// jshint esversion: 6

const express = require('express');
const server = express();
const users = require('./src/routes/users');
const messages = require('./src/routes/messages');
const port = process.env.PORT || 3000;

server.use(express.json());
server.set('view engine', 'ejs');

users(server);
messages(server);

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
