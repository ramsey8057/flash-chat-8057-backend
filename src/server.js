const express = require('express');
const server = express();
const users = require('./routes/users');
const port = process.env.PORT || 3000;

users(server);

server.use(express.json());
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
