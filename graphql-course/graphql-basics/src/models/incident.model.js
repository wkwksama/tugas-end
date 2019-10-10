import { Schema, model } from 'mongoose';

export default model('Incident', new Schema({
  name: String,
  information: String,
}, {
  timestamps: true,
}));
