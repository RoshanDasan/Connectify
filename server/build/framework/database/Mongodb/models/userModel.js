"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// schema for users
const userSchema = new mongoose_1.Schema({
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
        minlength: 3
    },
    dp: {
        type: String,
    },
    bio: {
        type: String,
    },
    gender: {
        type: String
    },
    city: {
        type: String
    },
    isBlock: {
        type: Boolean,
        default: false,
    },
    blockedUsers: [],
    blockingUsers: [],
    followers: [],
    following: [],
    requests: [],
    requested: []
}, { timestamps: true });
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
