/**
 * Author: Adam Eaton
 * Created: Saturday, September 23rd 2017, 9:13:55 pm
 * File Name: app.js
 * Challenge 4 - Get my DL
 */

let express = require('express');
let bodyParser = require('body-parser');

let port = 5007;
let app = express();

app.use(bodyParser.json());

app.get('/file', (req, res) => {
    if (req.param('f').includes('..'))
        res.send('Nice try');
    else
        res.download(__dirname + '/' + req.param('f'));
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port);
console.log('Challenge 4 Running... on port ' + port);