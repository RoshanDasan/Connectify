import { Schema, model } from "mongoose";

// schema for adding POST
const postSchema = new Schema(
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
          createdAt: {
            type: Date,
            default: new Date(),
          },
          image: String,
        },
    {
        timestamps: true,
    }
    
);

const Post = model("Post", postSchema);

export default Post;