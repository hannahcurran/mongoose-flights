/*
*The steps:
*
*1. Define the schema
*2. compile schemea into a model
*3.export the model
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define the schema
const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date
}, { timestamps: true

});

module.exports = mongoose.model('Flight', flightSchema); 