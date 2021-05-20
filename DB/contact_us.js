const mongoose = require ('mongoose');
const bodyParser = require("body-parser");



const contactusSchema = {
    name: String,
    email: String,
    message: String
 }
 
 const contactUs = mongoose.model("Contact Us", contactusSchema);
 
 app.post("/", function(req,res) {
    let newContactUs = new contactUs({
       name: req.body.name,
       email: req.body.email,
       message: req.body.message
    })
    newContactUs.save();
    res.redirect('/landing.html');
 })


 module.exports = contactusSchema