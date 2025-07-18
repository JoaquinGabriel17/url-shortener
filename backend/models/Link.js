import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortCode: {
    type: String,
    required: true,
    unique: true,
  },
  name:{
    type: String,
    default: 'Linko'
  },
  description:{
    type: String,
    default: 'No se ingresó una descripción.'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  clicks: {
    type: Number,
    default: 0,
  },
});

const Link = mongoose.model('Link', linkSchema);
export default Link;
