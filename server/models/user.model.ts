import { Schema, model } from 'mongoose';
import type { IUserApi } from '~/types';

const UserSchema = new Schema<IUserApi>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: String,
})

const User = model<IUserApi>('User', UserSchema);

export default User;
