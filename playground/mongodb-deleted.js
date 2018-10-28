// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const MONGO_URI = 'mongodb://zeshan:zeshan2018@ds157112.mlab.com:57112/mongo-todo-api';

MongoClient.connect(MONGO_URI, (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongo db');
  }

  // deleteMany
  // db.collection('Todos').deleteMany({ text: "eat lunch" }).then((res) => {
  //   console.log("res -> ", res);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({ text: 'eat lunch' }).then((res) => {
  //   console.log("res -> ", res);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({ completed: false }).then((res) => {
  //   console.log("res -> ", res);
  // });

  /* Practise Examples */
  // db.collection('Users').deleteMany({ name: "Andrew" }).then((res) => {
  //   console.log("res -> ", res);
  // });

  db.collection('Users').findOneAndDelete({ _id: new ObjectID('5bd59d8dc80eea28a06f79da') }).then((res) => {
    console.log("res -> ", res);
  });

  // db.close();
});

