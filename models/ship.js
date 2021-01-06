const mongoose = require('../db/conn');
const { Schema, mongo } = require('../db/conn');

const shipSchema = new Schema({
    id: Number,
    navn: String,
    hjemhavn: String,
    kaldesignal: String,
    MMSInummer: Number,
    Anvendelse: String,
    BRT_BT: String,
    Laengde: String,
    MaksPersoner: String
})

const Ship = mongoose.model('Ship', shipSchema)

module.exports = Ship;
