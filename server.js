const express = require('express');
const app = express();
const Port = process.env.Port || 3000;
const connectDB = require ('./DB/connection');
const routes = require('./API/routes') // includes the routes.js file

const fs = require("fs");


const Port = process.env.PORT || 3000;

// STATIC DIRECTORIES
app.use('/css', express.static('./private/css'));
app.use('/images', express.static('./private/images'));
app.use('/js', express.static('./private/js'));

app.use('/private/images', express.static('./private/images'));
app.use('/private/css', express.static('./private/css'));
app.use('/private/js', express.static('./private/js'));


app.get('/landing', function (request, response) {
    response.sendFile(__dirname + './landing.html');
});

// APP GETS
app.get('/', function (req, res) {
    // just being silly but you can change the header response so that it
    // doesn't say Node.js, but some custom info about your app
    res.set('Server', 'Wazubi Engine');
    res.set('X-Powered-By', 'Magical Pixies');

    fs.readFile("./landing.html", function (error, pgRes) {
        if (error) {
            res.writeHead(404);
            res.write(msg404);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(pgRes);
        }

        res.end();
    });
});


app.get('/recycle.html', function(req, res){

    fs.readFile("./recycle.html", function (error, pgRes) {
        if (error) {
            res.writeHead(404);
            res.write(msg404);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(pgRes);
        }

        res.end();
    });
});

app.get('/compost.html', function(req, res){

    fs.readFile("./compost.html", function (error, pgRes) {
        if (error) {
            res.writeHead(404);
            res.write(msg404);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(pgRes);
        }

        res.end();
    });
});

app.get('/trash.html', function(req, res){

    fs.readFile("./trash.html", function (error, pgRes) {
        if (error) {
            res.writeHead(404);
            res.write(msg404);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(pgRes);
        }

        res.end();
    });
});

app.get('/about-us.html', function(req, res){

    fs.readFile("./about-us.html", function (error, pgRes) {
        if (error) {
            res.writeHead(404);
            res.write(msg404);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(pgRes);
        }

        res.end();
    });
});

app.get('/landing.html', function(req, res){

    fs.readFile("./landing.html", function (error, pgRes) {
        if (error) {
            res.writeHead(404);
            res.write(msg404);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(pgRes);
        }

        res.end();
    });
});


app.get('/quiz.html', function(req, res){

    fs.readFile("./quiz.html", function (error, pgRes) {
        if (error) {
            res.writeHead(404);
            res.write(msg404);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(pgRes);
        }

        res.end();
    });
});



app.use(express.json()) 
app.use(routes) 


connectDB();


app.listen(Port, () => console.log ('Server started'));



