import mongoose, { Schema, model } from 'mongoose';
import type { IAgent } from '~/types';

const AgentSchema = new Schema<IAgent>({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    required: true,
  },
  agentFeedback: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AgentFeedBack',
    required: false,
  },
  description: {
    type: String,
    required: true,
  }
})

const Agent = model<IAgent>('Agent', AgentSchema);

export default Agent;
