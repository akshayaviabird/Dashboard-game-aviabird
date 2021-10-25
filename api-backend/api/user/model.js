const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email address'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please add valid email address.'],
    },
    password: {
        type: String,
        required: [true, 'Password can not be blank'],
        select: false,
        minlength: 6,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastActive: {
        type: Date
    }
});

userSchema.methods.matchPassword = async function(enteredPassword) {
    // eslint-disable-next-line no-return-await
    let match = false;
    if(enteredPassword === this.password){
        match = true;
    }
    return match;
};

module.exports = mongoose.model('User', userSchema);