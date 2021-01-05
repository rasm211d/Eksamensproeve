const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:9999/TwinShips', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;

