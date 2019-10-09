import * as mongoose from 'mongoose';

export const LinkSchema = new mongoose.Schema({
  link: String,
  id: String,
});
