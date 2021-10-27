const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    _id : String,
    name: {
        type: String
    },
    live: {
        type: Boolean,
        default: false
    },
    hostname: {
        type: String
    },
    url: {
        type: String
    }
});

module.exports = mongoose.model('Game', gameSchema)