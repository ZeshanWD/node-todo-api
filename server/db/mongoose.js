const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const MONGO_URI = 'mongodb://zeshan:zeshan2018@ds157112.mlab.com:57112/mongo-todo-api';

mongoose.connect(MONGO_URI);

module.exports = { mongoose };