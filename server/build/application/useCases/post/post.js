"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCreate = exports.getAllPost = void 0;
const httpstatuscodes_1 = require("../../../types/httpstatuscodes");
const appError_1 = __importDefault(require("../../../utilities/appError"));
const getAllPost = async (repositories) => {
    const posts = await repositories.getAllPost();
    if (!posts) {
        return new appError_1.default('Post not available', httpstatuscodes_1.HttpStatus.BAD_REQUEST);
    }
    return posts;
};
exports.getAllPost = getAllPost;
const postCreate = async (postDetails, respositories) => {
    const newpost = await respositories.uploadPost(postDetails);
    if (!newpost) {
        return new appError_1.default('Uploading failed', httpstatuscodes_1.HttpStatus.BAD_REQUEST);
    }
};
exports.postCreate = postCreate;
