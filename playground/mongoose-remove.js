const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/Todo');
const { User } = require('../server/models/User');
const { ObjectID } = require('mongodb');

// Todo.remove({}).then(res => {
//   console.log("res", res);
// });

// Todo.findOneAndRemove({})

Todo.findOneAndRemove({ _id: '5bdc13426aff4c03c88a5cc8' }).then(doc => {
  console.log("doc deleted", doc);
});

Todo.findByIdAndRemove('5bdc13426aff4c03c88a5cc8').then(doc => {
  console.log("doc deleted", doc);
});