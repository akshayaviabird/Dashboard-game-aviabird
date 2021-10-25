const mongoose = require('mongoose');

const GuessimageSchema = new mongoose.Schema({
    
    data: [{
        url: {
            type: String
        },
        word: {
            type: String
        },
        id: {
            type: Number
        },
        _id: false
    }]

});

module.exports = mongoose.model('Guessimage', GuessimageSchema)