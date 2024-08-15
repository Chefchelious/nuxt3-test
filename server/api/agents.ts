import { defineEventHandler } from 'h3';
import Agent from '~/server/models/agent.model';

export default defineEventHandler(async () => {
  try {
    return Agent.find().populate('agentFeedback');
  } catch (e: unknown) {
    console.error('Ошибка:', e);
    return createError({
      statusCode: 500,
      message: 'Something went wrong',
      stack: undefined,
    });
  }
});
