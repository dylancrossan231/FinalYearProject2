const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email is required'
      },
      password: {
        type: String,
        required: "Password is required",
        min:6,
        max:1024,
      },
    created_date: {
       type: Date,
       default: Date.now 
    }



});

module.exports = mongoose.model('User', UserSchema)