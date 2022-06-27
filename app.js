const express = require('express');
const path = require('path');

const app = express();

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

// Setup static and middleware
app.use(express.static('./public'));

// Set requests
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/about', (req, res) => {
    res.status(200).send('About Page');
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});