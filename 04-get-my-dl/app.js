/**
 * Author: Adam Eaton
 * Created: Saturday, September 23rd 2017, 9:13:55 pm
 * File Name: app.js
 */

import express from 'express';
import bodyParser from 'body-parser';

let port = 5007;
let app = express();

app.use(bodyParser.json());

app.get('/file', (req, res) => {
    res.download(__dirname + '/' + req.param('f'));
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port);