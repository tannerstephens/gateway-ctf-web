/**
 * Author: Adam Eaton
 * Created: Friday, January 26th 2017, 5:15:32 pm
 * File Name: app.js
 * Challenge 8
 */

let express = require('express');
let bodyParser = require('body-parser');

const PORT = 2710;
let app = express();

app.use(bodyParser.urlencoded());

// Index page route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT);
console.log('Challenge 8 Running... on port ' + PORT);