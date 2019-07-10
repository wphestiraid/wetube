import mongoose, { Schema } from 'mongoose';

const CommentSchema = new Schema({
  text: {
    type: String,
    required: 'Text is required'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  video: {
    type: Schema.Types.ObjectId,
    ref: 'Video'
  }
});

const model = mongoose.model('Comment', CommentSchema);

export default model;
