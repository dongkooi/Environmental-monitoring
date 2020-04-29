const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    temperature: Number,
    humidity: Number,
    time: Number,
})

module.exports = mongoose.model('arduino', DataSchema);