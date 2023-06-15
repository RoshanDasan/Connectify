"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
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
}, {
    timestamps: true,
});
const Post = (0, mongoose_1.model)("Post", postSchema);
exports.default = Post;
