import { Schema, model } from "mongoose";
import { Iuser } from "../../shapes";

const userSchema: Schema<Iuser> = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "Please enter your name"],
    },
    password: { type: String, required: [true, "Please enter a password"] },
    confirmPassword: {
      type: String,
      required: [true, "Please enter a password"],
    },
    LGA: {
      type: String,
      required: [true, "Please input your L.G.A"],
    },
    address: {
      type: String,
      required: [true, "Please input your address"],
    },
    phone: {
      type: Number,
      required: [true, "Please input your phone number"],
    },
    name: { type: String },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      trim: true,
    },

    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const userModel = model<Iuser>("User", userSchema);
export default userModel;
