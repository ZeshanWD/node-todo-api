// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const MONGO_URI = 'mongodb://zeshan:zeshan2018@ds157112.mlab.com:57112/mongo-todo-api';

MongoClient.connect(MONGO_URI, (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongo db');
  }

  // db.collection('Todos')
  //   .findOneAndUpdate(
  //     { _id: new ObjectID('5bd613483dc5e6267cf438af') },
  //     {
  //       $set: {
  //         completed: true
  //       }
  //     }, {
  //       returnOriginal: false,
  //     }
  //   )
  //   .then((res) => {
  //     console.log("res -> ", res);
  //   });

  db.collection('Users')
    .findOneAndUpdate(
      { _id: new ObjectID('5bd59c78c26e4e2c38c19cd7') },
      {
        $set: {
          name: "jen"
        },
        $inc: {
          age: 1
        }
      }, {
        returnOriginal: false,
      }
    )
    .then((res) => {
      console.log("res -> ", res);
    });


  // db.close();
});

