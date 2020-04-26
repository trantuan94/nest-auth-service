
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstname: { type: String, required: true, index: true },
  lastname: { type: String, required: true, index: true },
  username: { type: String, required: true, index: true },
  email: { type: String, required: true, index: true },
  password: { type: String, required: true },
});
