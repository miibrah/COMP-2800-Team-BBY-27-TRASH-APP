const express = require('express')
const app = express()
const connectDB = require ('./DB/connection');
const routes = require('./API/routes') // includes the routes.js file
const cors = require('cors') // includes cors module


app.use(cors())

app.use(express.json()) 
app.use(routes) 


connectDB();
const Port = process.env.Port || 3000;

app.listen(Port, () => console.log ('Server started'));



