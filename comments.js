// Create web server
// Create a new route that will return all comments
// Create a new route that will return a single comment
// Create a new route that will create a new comment
// Create a new route that will update a comment
// Create a new route that will delete a comment

const express = require('express');
const bodyParser = require('body-parser');
const comments = require('./comments');

const app = express();

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments.getAll());
});

app.get('/comments/:id', (req, res) => {
  const comment = comments.getComment(parseInt(req.params.id));
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

app.post('/comments', (req, res) => {
  const comment = comments.create(req.body);
  res.json(comment);
});

app.put('/comments/:id', (req, res) => {
  const comment = comments.update(parseInt(req.params.id), req.body);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

app.delete('/comments/:id', (req, res) => {
  if (comments.delete(parseInt(req.params.id))) {
    res.status(204).send();
  } else {
    res.status(404).send('Comment not found');
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});