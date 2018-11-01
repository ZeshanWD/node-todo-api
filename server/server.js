const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/Todo');
const { User } = require('./models/User');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log('req.body', req.body);
  Todo.create({
    text: req.body.text
  }).then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find()
    .then(todos => res.send({ todos }), e => res.status(400).send(e));
});

app.listen(3000, () => console.log("Server started on port 3000"));

module.exports = {
  app,
}