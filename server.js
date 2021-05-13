const express = require('express');
const app = express();
const Port = process.env.Port || 3000;
const connectDB = require ('./DB/connection');
const routes = require('./API/routes') // includes the routes.js file

const fs = require("fs");

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



app.use(express.json()) 
app.use(routes) 


connectDB();


app.listen(Port, () => console.log ('Server started'));



