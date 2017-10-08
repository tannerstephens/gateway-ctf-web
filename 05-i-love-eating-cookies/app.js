/**
 * Author: Adam Eaton
 * Created: Saturday, September 23rd 2017, 9:23:13 pm
 * File Name: app.js
 * Challenge 5 - I love eating cookies
 */

// import express from 'express';
let express = require('express');
// import bodyParser from 'body-parser';
let bodyParser = require('body-parser');
// import cookieParser from 'cookie-parser';
let cookieParser = require('cookie-parser');

let app = express();
let port = 4084;

app.use(cookieParser());

app.get('/*', (req, res) => {
    let c = req.cookies.admin;
    if (c === undefined) {
        res.cookie('admin', false).sendFile(__dirname + '/index.html');
    } else if (c === 'true') {
        res.sendFile(__dirname + '/flag.html');
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

app.listen(port);
console.log('Challenge 5 Running... on port ' + port);