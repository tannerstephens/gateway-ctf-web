/**
 * Author: Adam Eaton
 * Created: Friday, September 29th 2017, 6:15:34 pm
 * File Name: app.js
 */

import express from 'express';

let port = 1487;
let app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/*', (req, res) => {
    res.sendStatus(404);
});

app.listen(port);
console.log('Challenge 3 Running... on port ' + port);