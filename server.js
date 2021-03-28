'use strict';
const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
app.get('/', (req, res) => {
  res.send('Welcome People');
});

app.get('/bad', (req, res) => {
  throw new Error('something went really wrong');
});

function start(port) {
  app.listen(port, () => console.log(`Server is Listening on Port ${port}`));
}


app.use('*', notFoundHandler);
app.use(errorHandler);
module.exports = {
  app: app,
  start: start,
};
