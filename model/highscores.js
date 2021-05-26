const mongoose = require('mongoose')

const HighscoreSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true},
    highscore: { type: Number, required: true }
}, 
{
    collection: 'users'
}
);

const model = mongoose.model('HighscoreModel', HighscoreSchema);

module.exports = model;