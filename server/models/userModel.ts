import mongoose, {Schema, model} from "mongoose";

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: false },
    isActivated: { type: Boolean, required: false, unique: false },
    activationLink: { type: String, required: false, unique: false },
    resetPasswordLink: { type: String, required: false, unique: false },
    allowReset: { type: Boolean, required: false, unique: false },
    role: { type: String, required: true, unique: false },
    name: { type: String, required: true, unique: false },
    country: { type: String, required: false, unique: false },
    about: { type: String, required: false, unique: false },
});

const UserModel = mongoose.model('User', userSchema);
export default UserModel;