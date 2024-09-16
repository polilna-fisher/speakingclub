import mongoose, {Schema, model} from "mongoose";
import {ObjectId} from "mongodb";

const TokenSchema = new Schema({
    user: { type: ObjectId, required: false, unique: false, ref: 'User'},
    refreshToken: { type: String, required: true, unique: false },
});

const TokenModel = mongoose.model('Token', TokenSchema);
export default TokenModel;