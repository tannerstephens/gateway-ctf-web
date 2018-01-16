/**
 * Author: Adam Eaton
 * Created: Friday, October 8th 2017, 11:37:34 pm
 * File Name: app.js
 * Challenge 7 - SQL Vaccine
 */

let express = require('express');
let bodyParser = require('body-parser');
let sqlite3 = require('sqlite3');

const PORT = 4719;
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

    // Example Injection String: flag'---
    db.all('SELECT * FROM users WHERE user=\'' + user + '\' AND pass=\'' + pass + '\'', (err, row) => {
        // We don't want rows to be added or removed
        if (user.indexOf('delete') > -1 || user.indexOf('insert') > -1 || user.indexOf('update') > -1 || user.indexOf('into') > -1 ||
            pass.indexOf('delete') > -1 || pass.indexOf('insert') > -1 || pass.indexOf('update') > -1 || pass.indexOf('into') > -1)
            res.status(500).json({ message: 'Bruh...' });
        else if (row.length == 0)
            res.status(500).json({ 'user': user == '', 'pass': pass == '' });            
        else 
            res.json(row);
    });
});

// Users Route
app.use('/users', (req, res) => {
    db.all('SELECT user FROM users', (err, row) => {
        res.json(row);
    });
});

app.listen(PORT);
console.log('Challenge 7 Running... on port ' + PORT);