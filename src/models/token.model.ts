
import * as mongoose from 'mongoose';

export const TokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  type: { type: String, required: true, default: 'bearer'},
  revoked: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, required: true },
});
