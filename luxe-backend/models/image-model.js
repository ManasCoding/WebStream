import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
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
    images: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("image", ImageSchema);