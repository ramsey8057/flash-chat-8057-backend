// jshint esversion: 6

const mongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb+srv://ramsey8057:DevAhmed2772003%40%23@flashchat-b8ibq.mongodb.net/test?retryWrites=true&w=majority';

const getUserContactsDB = (userId, then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_user_contacts').find({ user_id: userId }).toArray((err, result) => {
            then(err, result);
        });

        db.close();

    });

};

const createUserContactsDB = (userId, then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_user_contacts').insertOne({
            user_id: userId,
            user_contacts: [],
        }, (err, result) => {
            then(err, result);
        });

        db.close();

    });

};

const addUserContactDB = (userId, contactId, then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw db;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_user_contacts').updateOne(
            {
                user_id: userId,
            },
            {
                $push: {
                    user_contacts: contactId,
                },
            },
            (err, result) => {
                then(err, result);
            },
        );

        db.close();

    });

};

const deleteContactDB = (userId, contactId, then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_user_contacts').updateOne(
            {
                user_id: userId,
            },
            {
                $pull: {
                    user_contacts: {
                        $in: [
                            contactId,
                        ],
                    },
                },
            },
            (err, result) => {
                then(err, result);
            }
        );

        db.close();

    });

};

module.exports.getUserContactsDB = getUserContactsDB;
module.exports.createUserContactsDB = createUserContactsDB;
module.exports.addUserContactDB = addUserContactDB;
module.exports.deleteContactDB = deleteContactDB;
