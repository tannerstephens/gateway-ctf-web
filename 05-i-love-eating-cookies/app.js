import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

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