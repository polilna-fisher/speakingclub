import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const partSchema = new Schema({
  type: { type: String, required: true, unique: false },
  name: { type: String, required: true, unique: false },
  dateTime: { type: Date, required: true, unique: false },
  topic: { type: String, required: true, unique: false },
  questions: { type: Array, required: true, unique: false },
});

const PartModel = mongoose.model('Part', partSchema);
export default PartModel;