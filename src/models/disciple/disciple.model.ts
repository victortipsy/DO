import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import { Idisciple } from "../../shapes";

const discipleSchema: Schema = new Schema<Idisciple>(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },

    phone: {
      type: Number,
      required: [true, "Please enter your name"],
    },

    uID: {
      type: String,
    },
    deployments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "agent",
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

const discipleModel = model<Idisciple>("disciple", discipleSchema);
export default discipleModel;
