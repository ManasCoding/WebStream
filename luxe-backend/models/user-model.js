import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    channel: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
    },
    profile: {
      type: String,
    },
    dob: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
