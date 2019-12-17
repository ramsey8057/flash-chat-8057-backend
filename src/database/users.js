// jshint esversion: 6

const mongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb+srv://ramsey8057:DevAhmed2772003%40%23@flashchat-b8ibq.mongodb.net/test?retryWrites=true&w=majority';

const all = (then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_users').find().sort({ user_id: 1 }).toArray((err, result) => {

            then(err, result);

        });

        db.close();

    });

};

const createUser = (user, then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_users').insertOne(user, (err, result) => {

            then(err, result);

        });

        db.close();

    });

};

const getUsingEmail = (email, then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_users').find({ user_email: email }).toArray((err, result) => {

            then(err, result);

        });

        db.close();

    });


};

const checkPassword = (email, password, then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_users').find({ user_email: email, user_password: password }).toArray((err, result) => {

            then(err, result);

        });

        db.close();

    });

};

const getNewId = (then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_users').find().sort({ user_id: -1 }).toArray((err, result) => {

            then(err, result[0].user_id + 1);

        });

        db.close();

    });

};

const updateFirstName = (email, password, firstName, then) => {

    // TODO add the functionality for updating the first name in mongodb

};

const updateLastName = (email, password, lastName, then) => {

    // TODO add the functionality for updating the last name in mongodb

};

const updateEmail = (oldEmail, password, newEmail, then) => {

    // TODO add the functionality for updating the email in mongodb

};

const updatePassword = (email, oldPassword, newPassword, then) => {

    // TODO add the functionality for updating the password in mongodb

};

exports.all = all;
exports.getUsingEmail = getUsingEmail;
exports.checkPassword = checkPassword;
exports.createUser = createUser;
exports.getNewId = getNewId;
