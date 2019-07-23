import mongoose, { Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  videos: [{ type: Schema.Types.ObjectId, ref: 'Video' }]
});

UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email'
});

const model = mongoose.model('User', UserSchema);

export default model;
