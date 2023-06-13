import { Document, Schema, model } from "mongoose";

interface IPost extends Document {
  userId: string;
  description: string;
  userName?: string;
  likes: any[];
  comments: any[];
  reports: any[];
  createdAt: Date;
  image?: string;
  video?: string;
  location: {
    type: string;
    coordinates: number[];
  };
}

const postSchema = new Schema<IPost>(
  {
    userId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
    },
    likes: [],
    comments: [],
    reports: [],
    createdAt: {
      type: Date,
      default: new Date(),
    },
    image: String,
    video: String,
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number],
        default: [Math.random() * 180 - 90, Math.random() * 360 - 180],
      },
    },
  },
  {
    timestamps: true,
  }
);



const Post = model<IPost>("Post", postSchema);

export default Post;
