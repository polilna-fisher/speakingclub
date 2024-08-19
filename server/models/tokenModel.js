const { Schema, model } = require("mongoose");
const {ObjectId} = require("mongodb");

const TokenSchema = new Schema({
    user: { type: ObjectId, required: false, unique: false, ref: 'User'},
    refreshToken: { type: String, required: true, unique: false },
});

module.exports = model("Token", TokenSchema);