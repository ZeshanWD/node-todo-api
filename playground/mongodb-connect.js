// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const MONGO_URI = 'mongodb://zeshan:zeshan2018@ds157112.mlab.com:57112/mongo-todo-api';

MongoClient.connect(MONGO_URI, (err, db) => {

  if (err) {
    return console.log('Unable to connect to mongo db');
  }
  console.log("Succesfully connected to mongodb");

  // db.collection('Todos').insertOne({
  //   text: "Something to do",
  //   completed: false,
  // }, (err, result) => {
  //   if (err) {
  //     console.log('error Happened', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: "Zeshan",
  //   age: 20,
  //   location: "NY, colorado",
  // }, (err, result) => {
  //   if (err) {
  //     console.log('error Happened', err);
  //   }

  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.close();
});

