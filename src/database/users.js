// jshint esversion: 6

const mongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb+srv://ramsey8057:DevAhmed2772003%40%23@flashchat-b8ibq.mongodb.net/test?retryWrites=true&w=majority';

const allDB = (then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_users').find().sort({ user_id: 1 }).toArray((err, result) => {

            then(err, result);

        });

        db.close();

    });

};

const createUserDB = (user, then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_users').insertOne(user, (err, result) => {

            then(err, result);

        });

        db.close();

    });

};

const getUsingEmailDB = (email, then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_users').find({ user_email: email }).toArray((err, result) => {

            then(err, result);

        });

        db.close();

    });


};

const checkPasswordDB = (email, password, then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_users').find({ user_email: email, user_password: password }).toArray((err, result) => {

            then(err, result);

        });

        db.close();

    });

};

const getNewIdDB = (then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_users').find().sort({ user_id: -1 }).toArray((err, result) => {

            then(err, result[0].user_id + 1);

        });

        db.close();

    });

};

const updateFirstNameDB = (email, password, firstName, then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_users')
           .updateOne(
               {
                   user_email: email,
                   user_password: password,
               },
               {
                   $set: {
                       user_first_name: firstName,
                   },
               },
               (err, res) => {

                then(err, res);

               }
           );

        db.close();

    });

};

const updateLastNameDB = (email, password, lastName, then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_users')
           .updateOne(
               {
                   user_email: email,
                   user_password: password,
               },
               {
                   $set: {
                       user_last_name: lastName,
                   },
               },
               (err, res) => {

                then(err, res);

               }
           );
           
        db.close();

    });

};

const updateEmailDB = (oldEmail, password, newEmail, then) => {

    // TODO: add the functionality for updating the email in mongodb

};

const updatePasswordDB = (email, oldPassword, newPassword, then) => {

    // TODO: add the functionality for updating the password in mongodb

};

module.exports.allDB = allDB;
module.exports.getUsingEmailDB = getUsingEmailDB;
module.exports.checkPasswordDB = checkPasswordDB;
module.exports.createUserDB = createUserDB;
module.exports.getNewIdDB = getNewIdDB;
module.exports.updateFirstNameDB = updateFirstNameDB;
module.exports.updateLastNameDB = updateLastNameDB;
module.exports.updateEmailDB = updateEmailDB;
module.exports.updatePasswordDB = updatePasswordDB;
