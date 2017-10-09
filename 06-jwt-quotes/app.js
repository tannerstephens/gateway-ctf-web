/**
 * Author: Adam Eaton
 * Created: Friday, October 8th 2017, 11:37:34 pm
 * File Name: app.js
 * Challenge 6 - JWT Quotes
 */

// import express from 'express';
let express = require('express');
let jwt = require('jsonwebtoken');

let port = 5193;
let app = express();

let JWT_SECRET = 'DangThisSecretSureIsSecret';

let usersQuotes = {
    'Elliot Alderson': 'My favorite sport is HACKysack',
    'Morty Smith': 'Oh jeez',
    'Homer Simpson': 'You little....',
    'Bart Simpson': '*choking noise*',
    'Batman': 'I\'m batman',
    'Kevin': 'Oh man, I sure like sig.edu',
    'Flag': 'flag{4lw4y5_V4l1d473_70k3n5}',
    'Bugs Bunny': 'Eh, what\'s up doc',
    'Garfield': 'I hate mondays',
    'Johnny Bravo': 'It\'s a beautiful day, but not as beautiful as me',
    'SpongeBob Squarepants': 'Gary, you are gonna finish your dessert, and you are gonna like it!',
}

let users = Object.keys(usersQuotes).map(name => {
    return name;
});



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/getUserInfo', (req, res) => {
    res.json({
        jwt: jwt.sign({
            users: users,
            user: 'Garfield'
        }, JWT_SECRET)
    });
});

app.get('/getQuote', (req, res) => {
    let j = jwt.decode(req.headers['authorization']);
    res.json({quote: usersQuotes[j.user]});
})

app.listen(port);
console.log('Challenge 6 Running... on port ' + port);