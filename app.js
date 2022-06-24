const express = require('express');
const app = express();

// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });
app.get ('/mensaje', (req, res) => {
    res.send('Hello Heroku!');
}
);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});