import { Schema, model } from 'mongoose';
import type { IAgentFeedback } from '~/types';

const AgentFeedbackSchema = new Schema<IAgentFeedback>({
  rating: {
    type: Number,
    required: true,
  },
  reviews: {
    type: Number,
    required: true,
  },
})

const AgentFeedback = model<IAgentFeedback>('AgentFeedBack', AgentFeedbackSchema);

export default AgentFeedback;
