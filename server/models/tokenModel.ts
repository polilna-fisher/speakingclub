import {Schema, model} from "mongoose";
import {ObjectId} from "mongodb";

const TokenSchema = new Schema({
    user: { type: ObjectId, required: false, unique: false, ref: 'User'},
    refreshToken: { type: String, required: true, unique: false },
});

module.exports = model("Token", TokenSchema);