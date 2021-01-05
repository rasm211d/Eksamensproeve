const mongoose = require('../db/conn');
const { Schema, mongo } = require('../db/conn');

const sensorSchema = new Schema({
    shipId: Number,
    fart: Number,
    kurs: String,
    GPS: String,
    Vindretning: Number,
    vindstyrke: String,
    temperatur: Number,
    motorRPM: Number

})

const Sensor = mongoose.model('Sensor', { sensorSchema })

module.exports = Sensor;