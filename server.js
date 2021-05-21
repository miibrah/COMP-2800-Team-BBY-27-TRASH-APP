const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const session = require('express-session')

const JWT_SECRET = 'asdinahosidha;sidh!@##$^#$%#asluidalisudhlauisdhasuidh';

// mongoose.connect();
mongoose.connect('mongodb+srv://dbUser:dbUser@cluster0.olikl.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true
});
const connectDB = require ('./DB/connection');
const routes = require('./API/routes') // includes the routes.js file

const fs = require("fs");
const Port = process.env.PORT || 3000;

// STATIC DIRECTORIES
app.use('/css', express.static('./private/css'));
app.use('/images', express.static('./private/images'));
app.use('/js', express.static('./private/js'));
app.use(bodyParser.json())

app.set('views', express.static('./views'));
app.set('view engine', 'ejs');


app.use('/private/images', express.static('./private/images'));
app.use('/private/css', express.static('./private/css'));
app.use('/private/js', express.static('./private/js'));

app.use(session(
    {
        secret:'extra text that no one will guess',
        name:'wazaSessionID',
        resave: false,
        saveUninitialized: true 
}));


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

    if(req.session.loggedIn) {
        console.log("secret message");
        console.log(req.session.email, "is logged in!");
    } 
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


app.get('/login.html', function(req, res){

    fs.readFile("./login.html", function (error, pgRes) {
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

app.get('/register.html', function(req, res){

    fs.readFile("./register.html", function (error, pgRes) {
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



app.post('/api/register', async (req, res) => {
    console.log(req.body);
    
    const { username, password: plainTextPassword } = req.body;

    if(!username || typeof username !== 'string') {
        return res.json({ status: 'error', error: 'Invalid username' })
    }

    if(!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password' })
    }

    if(plainTextPassword.length < 5) {
        return res.json({ status: 'error', error: 'Password too small. Should be at least 6 characters.' })
    }

    const password = await bcrypt.hash(plainTextPassword, 10);

    // console.log(await bcrypt.hash(password, 10));
    console.log(password);


    try {
        const response = await User.create({
            username,
            password
        })
        console.log("User created succesfully", response)

        req.session.loggedIn = true;
        req.session.email = username;
        req.session.save(function(err) {
            // session saved
        });
        
    } catch(error) {
        if (error.code === 11000) {
            return res.json({ status: 'error', error: 'Username already in use' })
        }
        throw error;
        // console.log(JSON.stringify(error));
        // return res.json({ status: 'error' })
    }

    res.json({ status: 'ok' })
})

app.post('/api/login', async (req, res) => {

    const { username, password } = req.body;
    const user = await User.findOne({ username }).lean();

    if(!user) {
        return res.json({ status: 'error', error: 'Invalid username/password' });
    }

    if( await bcrypt.compare(password, user.password)) {
        // the username , password combination is succesful

        const token = jwt.sign(
            {   id: user._id, 
                username: user.username 
            }, 
            JWT_SECRET
            )

        req.session.loggedIn = true;
        req.session.email = username;
        req.session.save(function(err) {
            // session saved
        });

        return res.json({ status: 'ok', data: token });
    }

    res.json( {status: 'error', error: 'Invalid username/password' } )

})

app.get('/logout', function(req,res){
    console.log('Session with ', req.session.email, ' is destroyed!');
    req.session.destroy(function(error){
        if(error) {
            console.log(error);
            console.log("session destory function encounted an error");
        } else {
            console.log('totally');
        }
    });
    res.redirect("/login.html");
})




app.use(express.json()) 
app.use(routes) 


connectDB();


app.listen(Port, () => console.log ('Server started'));



