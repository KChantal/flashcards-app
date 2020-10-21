const express = require('express');
const path = require('path');
const dbController = require('./controllers/dbController');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../client/')));
app.use(express.static(path.resolve(__dirname, '../build/')));

app.get('/getWords', dbController.getChineseWords, (req, res) => {
  res.status(200).json(res.locals.words);
});

// Serve base html page with a GET request to /
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { error: `An error occurred, ${err}` },
  };
  const errorObj = { ...defaultError, err };
  res.status(errorObj.status).send(errorObj);
});

// Start server listening
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;