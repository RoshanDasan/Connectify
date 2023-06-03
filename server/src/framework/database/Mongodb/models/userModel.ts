import mongoose, { Schema, model } from "mongoose";

// schema for users
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,

    },
    email: {
      type: String,
      required: true,
    },
    number: {
        type: Number,
    },
    password: {
      type: String,
      minlength:3
    },
    dp: {
      type: String,
    },
    bio: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    followers: [],
    following: []

  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
