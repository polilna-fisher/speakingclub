const {Schema, model} = require('mongoose');

const meetingSchema = new Schema({
    date: {type: String, required: true, unique: false},
    dateTime: {type: Date, required: true, unique: false},
    type: {type: String, required: true, unique: false},
    name: {type: String, required: true, unique: false},
    host: {type: String, required: true, unique: false},
    hostIcon: {type: String, required: true, unique: false},
    idParts: {type: Array, required: false, unique: false}

})

module.exports = model('Meeting', meetingSchema);