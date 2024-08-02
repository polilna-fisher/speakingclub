// const {Schema, model} = require('mongoose');
//
// const meetingSchema = new Schema({
//     date: {type: String, required: true, unique: false},
//     dateTime: {type: Date, required: true, unique: false},
//     type: {type: String, required: true, unique: false},
//     name: {type: String, required: true, unique: false},
//     host: {type: String, required: true, unique: false},
//     hostIcon: {type: String, required: true, unique: false},
//     part1: {
//         dateTime: {type: Date, required: true, unique: false},
//         topic: {type: String, required: true, unique: false},
//         questions: {type: Array, required: true, unique: false},
//         booked: {type: Boolean, required: true, unique: false}
//     },
//     part2: {
//         dateTime: {type: Date, required: true, unique: false},
//         topic: {type: String, required: true, unique: false},
//         questions: {type: Array, required: true, unique: false},
//         booked: {type: Boolean, required: true, unique: false}
//     }
//
// })
//
// module.exports = model('Meeting', meetingSchema);
