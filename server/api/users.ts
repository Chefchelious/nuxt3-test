import { defineEventHandler } from 'h3';
import User from '~/server/models/user.model';

export default defineEventHandler(async (event) => {

  const users = await User.find().exec();

  return users;
});
