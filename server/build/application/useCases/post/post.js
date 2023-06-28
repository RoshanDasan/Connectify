"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReportedUsers = exports.postReport = exports.postEdit = exports.deleteComment = exports.replyComment = exports.insertComment = exports.updateLike = exports.deletePostById = exports.getPostById = exports.getPostsByUser = exports.postCreate = exports.getAllPost = void 0;
const httpstatuscodes_1 = require("../../../types/httpstatuscodes");
const appError_1 = __importDefault(require("../../../utilities/appError"));
// bussiness logics...
// find all posts from the database
const getAllPost = async (repositories) => {
    const posts = await repositories.getAllPost();
    if (!posts) {
        throw new appError_1.default('Post not available', httpstatuscodes_1.HttpStatus.BAD_REQUEST);
    }
    return posts;
};
exports.getAllPost = getAllPost;
// create a post
const postCreate = async (postDetails, respositories) => {
    const newpost = await respositories.uploadPost(postDetails);
    if (!newpost) {
        throw new appError_1.default('Uploading failed', httpstatuscodes_1.HttpStatus.BAD_REQUEST);
    }
    return newpost;
};
exports.postCreate = postCreate;
// get all post by a user
const getPostsByUser = async (userId, repositories) => {
    const posts = await repositories.getPostsByUser(userId);
    return posts;
};
exports.getPostsByUser = getPostsByUser;
// get a single post by postId
const getPostById = async (id, repositories) => {
    const post = await repositories.getPostById(id);
    return post;
};
exports.getPostById = getPostById;
//delete a particular post by postId
const deletePostById = async (id, repositories) => {
    const deletedData = await repositories.deletePost(id);
    if (!deletedData) {
        throw new appError_1.default('No data found for delete', httpstatuscodes_1.HttpStatus.BAD_REQUEST);
    }
    return deletedData;
};
exports.deletePostById = deletePostById;
// like or dislike post 
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
// add comment to a particular post by postId
const insertComment = async (postId, userId, comment, repositories) => {
    const commentResult = await repositories.insertComment(postId, userId, comment);
    return commentResult;
};
exports.insertComment = insertComment;
// reply a comment
const replyComment = async (postId, userId, comment, reply, repositories) => {
    const commentResult = await repositories.replyComment(postId, userId, comment, reply);
    if (!commentResult) {
        throw new appError_1.default('Reply failed', httpstatuscodes_1.HttpStatus.BAD_REQUEST);
    }
    return 'Reply succcess';
};
exports.replyComment = replyComment;
// delete a particulat comment using index number
const deleteComment = async (postId, index, repositories) => {
    const { comments } = await repositories.getPostById(postId);
    comments.splice(index, 1);
    const updateResult = await repositories.pushComment(postId, comments);
    return updateResult;
};
exports.deleteComment = deleteComment;
// edit post 
const postEdit = async (postId, body, repositories) => {
    const commentResult = await repositories.editPost(postId, body);
    return commentResult;
};
exports.postEdit = postEdit;
// report post 
const postReport = async (userId, postId, reason, repositories) => {
    const response = await repositories.reportPost(userId, postId, reason);
    return response;
};
exports.postReport = postReport;
const getReportedUsers = async (postId, repositories) => {
    const users = await repositories.getReportedUsers(postId);
    return users;
};
exports.getReportedUsers = getReportedUsers;
