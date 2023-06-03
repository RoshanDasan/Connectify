"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLike = exports.deletePostById = exports.getPostById = exports.getPostsByUser = exports.postCreate = exports.getAllPost = void 0;
const httpstatuscodes_1 = require("../../../types/httpstatuscodes");
const appError_1 = __importDefault(require("../../../utilities/appError"));
const getAllPost = async (repositories) => {
    const posts = await repositories.getAllPost();
    if (!posts) {
        throw new appError_1.default('Post not available', httpstatuscodes_1.HttpStatus.BAD_REQUEST);
    }
    return posts;
};
exports.getAllPost = getAllPost;
const postCreate = async (postDetails, respositories) => {
    const newpost = await respositories.uploadPost(postDetails);
    if (!newpost) {
        throw new appError_1.default('Uploading failed', httpstatuscodes_1.HttpStatus.BAD_REQUEST);
    }
    return newpost;
};
exports.postCreate = postCreate;
const getPostsByUser = async (userId, repositories) => {
    const posts = await repositories.getPostsByUser(userId);
    return posts;
};
exports.getPostsByUser = getPostsByUser;
const getPostById = async (id, repositories) => {
    const post = await repositories.getPostById(id);
    return post;
};
exports.getPostById = getPostById;
const deletePostById = async (id, repositories) => {
    const deletedData = await repositories.deletePost(id);
    if (!deletedData) {
        throw new appError_1.default('No data found for delete', httpstatuscodes_1.HttpStatus.BAD_REQUEST);
    }
    return deletedData;
};
exports.deletePostById = deletePostById;
const updateLike = async (id, userId, repositories) => {
    // find the post by id
    const post = await repositories.getPostById(id);
    // check weather user is already liked this post of not
    if (post.likes.includes(userId)) {
        // if user already liked the post
        await repositories.dislikePost(id, userId);
    }
    else {
        // else user not liked the post
        await repositories.likePost(id, userId);
    }
};
exports.updateLike = updateLike;
