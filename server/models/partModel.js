const {Schema, model} = require('mongoose');

const partSchema = new Schema({
        type: {type: String, required: true, unique: false},
        name: {type: String, required: true, unique: false},
        dateTime: {type: Date, required: true, unique: false},
        topic: {type: String, required: true, unique: false},
        questions: {type: Array, required: true, unique: false},
        booked: {type: Boolean, required: true, unique: false}
})

module.exports = model('Part', partSchema);