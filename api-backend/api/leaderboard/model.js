const mongoose = require('mongoose');

const LeaderboardSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    score: [{
        username: {
            type: String
        },
        email: {
            type: String
        },
        points: {
            type: Number
        },
        _id: false
    }],

});

module.exports = mongoose.model('Leaderboard', LeaderboardSchema)