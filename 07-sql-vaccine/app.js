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

app.use(bodyParser.json());

let db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run('CREATE TABLE test (info TEXT)');

    let query = db.prepare('INSERT INTO test VALUES (?)');
    for (let i = 0; i < 10; i++) {
        query.run('test: ' + i);
    }
    query.finalize();

    db.each('SELECT * FROM test', (err, row) => {
        console.log(row);
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
    let user = req.params.user
    console.log(req.params);
    res.json({});
});

app.listen(port);
console.log('Challenge 6 Running... on port ' + port);