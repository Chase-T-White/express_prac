const express = require('express');
const logger = require('./logger');

const app = express();

app.use(logger);

app.get('/', (req, res) => {
    res.send('Welcome Home!');
});

app.get('/about', (req, res) => {
    res.send('About Page!');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});