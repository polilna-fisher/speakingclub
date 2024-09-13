import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const meetingSchema = new Schema({
  dateTime: { type: Date, required: true, unique: false },
  type: { type: String, required: true, unique: false },
  name: { type: String, required: true, unique: false },
  host: { type: String, required: true, unique: false },
  hostIcon: { type: String, required: true, unique: false },
  idParts: { type: Array, required: true, unique: false },
});

const MeetingModel = mongoose.model('Meeting', meetingSchema);
export default MeetingModel;