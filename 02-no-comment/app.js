/**
 * Author: Adam Eaton
 * Created: Friday, September 29th 2017, 6:13:55 pm
 * File Name: app.js
 * Challenge 2 - No Comment
 */

// import express from 'express';
let express = require('express');

let port = 1783;
let app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/*', (req, res) => {
    res.sendStatus(404);
});

app.listen(port);
console.log('Challenge 2 Running... on port ' + port);