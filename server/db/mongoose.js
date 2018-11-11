const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const URI = process.env.MONGODB_URI;

mongoose
  .connect(URI, {
    useMongoClient: true,
    socketTimeoutMS: 10000,
    keepAlive: true,
  })
  .then(
    () => {
      console.log('connection db ready to use.');
    },
    (err) => {
      console.log('connection error - ', err);
    },
  );

module.exports = { mongoose };