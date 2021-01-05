const mongoose = require('../db/conn');
const { Schema, mongo } = require('../db/conn');

const userSchema = new Schema({
    email: String,
    password: String
})

const User = mongoose.model('Sensor', { userSchema })

module.exports = User;