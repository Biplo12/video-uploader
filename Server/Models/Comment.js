import mongoose from "mongoose";

const CommentsSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      required: true,
    },
    commentDesc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comments", CommentsSchema);
