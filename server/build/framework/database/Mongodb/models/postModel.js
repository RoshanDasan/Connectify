"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// schema for adding POST
const postSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
const Post = (0, mongoose_1.model)("Post", postSchema);
exports.default = Post;
