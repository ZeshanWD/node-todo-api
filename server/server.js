const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/Todo');
const { User } = require('./models/User');

const app = express();

const port = process.env.PORT || 3000;

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

app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) return res.status(404).send();
  Todo.findById(id)
    .then(todo => {
      if (!todo) return res.status(404).send('Todo not found');
      res.send({ todo });
    }).catch(err => res.status(400).send(err));
});

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) return res.status(404).send();

  Todo.findByIdAndRemove(id)
    .then(todo => {
      if (!todo) return res.status(404).send();

      res.status(200).send({ todo });
    }).catch((e) => {
      if (e) return res.status(400).send();
    });

});

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = {
  app,
}