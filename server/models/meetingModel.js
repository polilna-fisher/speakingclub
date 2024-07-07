const {Schema, model} = require('mongoose');

const meetingSchema = new Schema({
    date: {type: Date, required: true, unique: false},
    type: {type: String, required: true, unique: false},
    name: {type: String, required: true, unique: false},
    host: {type: String, required: true, unique: false},
    hostIcon: {type: String, required: true, unique: false},
    topic1: {type: String, required: true, unique: false},
    questions1: {type: Array, required: true, unique: false},
    topic2: {type: String, required: true, unique: false},
    questions2: {type: Array, required: true, unique: false},
    booked: {type: Boolean, required: true, unique: false}
})

module.exports = model('Meeting', meetingSchema);