const express = require('express');
const app = express();

app.get ('/mensaje', (req, res) => {
    res.send('Hello Heroku!');
});

app.get ('/', (req, res) => {
    res.send('Hello Heroku HOME!');
});

app.get ('/hi', (req, res) => {
    res.send('hi ho let´s go! 🚀');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});