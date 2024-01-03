import mongoose, { Schema, mongo } from "mongoose";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //TODO: cloudinary url
      required: true,
    },
    thumbnail: {
      type: String, //TODO: cloudinary url
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, //TODO: from cloudinary
      required: true,
    },

    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Video = mongoose.model("Video", videoSchema);

export { Video };
