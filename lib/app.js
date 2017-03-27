const express = require('express');
const app = express();
const errorHandler = require('./error-handler');

app.use(express.static('./'));

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: '.'});
});

app.use(errorHandler);

module.exports = app;