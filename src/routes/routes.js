// jshint esversion: 6

const appRouter = (app) => {
    
    app.get('/', (req, res) => {
        res.send('Hello, World!');
        res.end();
    });

    // TODO: write the rest of routes in here
    // TODO: make a route to check user and password
    // TODO: make a route to sign a new user
    // TODO: make a route to send a message

};

module.exports = appRouter;
