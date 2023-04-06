import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import { Iagent } from "../../shapes";

interface IagentData extends Iagent, mongoose.Document {}

const agentSchema: Schema = new Schema<Iagent>(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      typee: String,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
    confirmPassword: {
      type: String,
      required: [true, "Please enter your password"],
    },
    role: {
      type: String,
      default: "agent",
    },
    LGA: {
      type: String,
      required: [true, "Please enter your name"],
    },
    phone: {
      type: String,
      required: [true, "Please enter your name"],
    },
    disciples: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "disciple",
      },
    ],
    requests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "request",
      },
    ],
    feedbacks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const agentModel = model<IagentData>("agent", agentSchema);
export default agentModel;
