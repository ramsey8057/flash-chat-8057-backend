const mongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb+srv://ramsey8057:DevAhmed2772003%40%23@flashchat-b8ibq.mongodb.net/test?retryWrites=true&w=majority';

const all = (then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_users').find().sort({ user_id: 1 }).toArray((err, result) => {

            if(err) throw err;

            then(err, result);

        });

        db.close();

    });

};

const withId = (email, then) => {
    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_users').find({ user_email: email }).toArray((err, result) => {

            if(err) throw err;
            then(err, result);

        });

        db.close();

    });

};

exports.all = all;
exports.withId = withId;
