const express = require('express');
const app = express();

app.get ('/mensaje', (req, res) => {
    res.send('Hello Heroku!');
});

app.get ('/', (req, res) => {
    res.send('Hello Heroku HOME!');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});