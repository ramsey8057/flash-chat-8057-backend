// jshint esversion: 6

const mongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb+srv://ramsey8057:DevAhmed2772003%40%23@flashchat-b8ibq.mongodb.net/test?retryWrites=true&w=majority';

const getMessagesByParticipantsDB = (first_participant_id, second_participant_id, then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_conversations').find({
            $or: [
                {
                    participants: {
                        first_participant_id: first_participant_id,
                        second_participant_id: second_participant_id,
                    },
                },
                {
                    participants: {
                        first_participant_id: second_participant_id,
                        second_participant_id: first_participant_id,
                    },
                },
            ],
        }).toArray((err, result) => {

            then(err, result);

        });

        db.close();

    });

};

const getUserAllMessagesDB = (user_id, then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_conversations').find({
            $or: [
                {
                    "participants.first_participant_id": user_id,
                },
                {
                    "participants.second_participant_id": user_id,
                },
            ],
        }).toArray((err, result) => {

            then(err, result);

        });

        db.close();

    });

};

const sendMessageDB = (first_participant_id, second_participant_id, message, then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_conversations').updateOne(
            {
                $or: [
                    {
                        participants: {
                            first_participant_id: first_participant_id,
                            second_participant_id: second_participant_id,
                        },
                    },
                    {
                        participants: {
                            first_participant_id: second_participant_id,
                            second_participant_id: first_participant_id,
                        },
                    },
                ],
            },
            {
                $push: {
                    messages: message,
                },
            },
            (err, result) => {

                then(err, result);

            },
        );

        db.close();

    });

};

const getNewConversationIdDB = (then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_conversations').find().sort({ conversation_id: -1 }).toArray((err, result) => {

            if(result[0]) {

                then(err, result[0].conversation_id + 1);

            } else {

                then(err, 1);

            }

        });

        db.close();

    });

};

const createConversationDB = (conversation, then) => {

    mongoClient.connect(connectionString, (err, db) => {

        if(err) throw err;
        const dbo = db.db('flash_chat');

        dbo.collection('flash_conversations').insertOne(conversation, (err, result) => {

            then(err, result);

        });

        db.close();

    });

};

module.exports.getMessagesByParticipantsDB = getMessagesByParticipantsDB;
module.exports.getUserAllMessagesDB = getUserAllMessagesDB;
module.exports.sendMessageDB = sendMessageDB;
module.exports.getNewConversationIdDB = getNewConversationIdDB;
module.exports.createConversationDB = createConversationDB;
