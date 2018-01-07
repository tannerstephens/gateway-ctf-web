/**
 * Author: Adam Eaton
 * Created: Friday, October 8th 2017, 11:37:34 pm
 * File Name: app.js
 * Challenge 7 - SQL Vaccine
 */

// import express from 'express';
let express = require('express');
let bodyParser = require('body-parser');
let sqlite3 = require('sqlite3');

let port = 4719;
let app = express();

app.use(bodyParser.urlencoded());

let db = new sqlite3.Database(':memory:');

// Database Users
let dbVals = [
    { user: 'john', pass: 'smith'},
    { user: 'admin', pass: 'securepass'},
    { user: 'flag', pass: 'flag{0h_1nj3ct10n_s0_fancy}'}
];

// Populate database
db.serialize(() => {
    db.run('CREATE TABLE users (user TEXT, pass TEXT)');

    let query = db.prepare('INSERT INTO users VALUES (?, ?)');
    
    dbVals.forEach(u => {
        query.run(u.user, u.pass);
    });

    query.finalize();
});

// Index page route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Login Route
app.use('/login', (req, res) => {
    let user = req.body.user.toLowerCase();
    let pass = req.body.pass.toLowerCase();

    db.all('SELECT * FROM users WHERE user=\'' + user + '\' AND pass=\'' + pass + '\'', (err, row) => {
        res.json(row);
    });
});

// Users Route
app.use('/users', (req, res) => {
    db.all('SELECT user FROM users', (err, row) => {
        res.json(row);
    });
});

app.listen(port);
console.log('Challenge 7 Running... on port ' + port);