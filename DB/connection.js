const mongoose = require ('mongoose');
const bodyParser = require("body-parser");
const { StringDecoder } = require('string_decoder');


const URI = "mongodb+srv://dbUser:dbUser@cluster0.olikl.mongodb.net/test";

const connectDB = async()=> {
   await mongoose.connect(URI, { useNewUrlParser: true,  useUnifiedTopology: true  });
   console.log('db connected!');
};



module.exports = connectDB;