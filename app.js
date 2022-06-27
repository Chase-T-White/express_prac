const express = require('express');

const app = express();

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

app.get('/', async (req, res) => {
    await res.send('Home Page');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});