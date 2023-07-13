const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// *The steps:
// *
// *1. Define the schema
// *2. compile schemea into a model
// *3.export the model
// */

const ticketSchema = new Schema({
    seat: {
        type: String,
        enum: [/[A-F][1-9]\d?/]
    },
    price: {
        type: Number,
        min: 0,
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: 'Flight'
}
});

module.exports = mongoose.model('Ticket', ticketSchema);


