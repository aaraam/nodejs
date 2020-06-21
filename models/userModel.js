const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    }
});

userSchema.set('timestamps', true);
module.exports = mongoose.model('Users', userSchema);