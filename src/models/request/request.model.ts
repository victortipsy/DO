import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import { Irequest } from "../../shapes";

const requestSchema: Schema = new Schema<Irequest>(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    address: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const requestModel = model<Irequest>("request", requestSchema);
export default requestModel;
