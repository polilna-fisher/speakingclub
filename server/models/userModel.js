const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: false },
    isActivated: { type: Boolean, required: false, unique: false },
    activationLink: { type: String, required: false, unique: false },
});

module.exports = model("User", userSchema);