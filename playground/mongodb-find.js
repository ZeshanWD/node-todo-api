// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const MONGO_URI = 'mongodb://zeshan:zeshan2018@ds157112.mlab.com:57112/mongo-todo-api';

MongoClient.connect(MONGO_URI, (err, db) => {

  if (err) {
    return console.log('Unable to connect to mongo db');
  }
  console.log("Succesfully connected to mongodb");

  // db.collection("Todos").find({
  //   _id: new ObjectID('5bd59bcd974d6739c0db8077')
  // }).toArray().then((docs) => {
  //   console.log('data', JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   if (err) {
  //     console.log('Unable to fetch data', err);
  //   }
  // });

  // db.collection("Todos").find().count().then((count) => {

  //   console.log("Todos count", count);

  // }, (err) => {
  //   if (err) {
  //     console.log('Unable to fetch data', err);
  //   }
  // });

  db.collection("Users").find({ name: "Zeshan" }).count().then((count) => {

    console.log("Todos count", count);

  }, (err) => {
    if (err) {
      console.log('Unable to fetch data', err);
    }
  });

  db.close();
});

