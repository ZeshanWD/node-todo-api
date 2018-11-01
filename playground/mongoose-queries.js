const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/Todo');
const { User } = require('../server/models/User');

const { ObjectID } = require('mongodb');

// const id = '5bdaed00e4c76d380ca37e4b11';

// if (!ObjectID.isValid(id)) {
//   console.log("id not valid");
// }

// Todo.find({
//   _id: id,
// }).then(todos => {
//   console.log('todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => console.log("todo", todo));

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) return console.log('id not found');
//     console.log("todo by id", todo)
//   }).catch(err => console.log('err', err));

const userId = '5bd61e7769068c3c1cb30aca';
User.findById(userId)
  .then(user => {
    if (!user) return console.log('user not found');
    console.log("user by id", user)
  }).catch(err => console.log('err', err));
