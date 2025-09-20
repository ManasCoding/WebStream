import mongoose from "mongoose";

const ShortSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    shorts: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("short", ShortSchema);