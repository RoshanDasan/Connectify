"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRepositoryMongoDb = void 0;
const postModel_1 = __importDefault(require("../models/postModel"));
const userModel_1 = __importDefault(require("../models/userModel"));
const mongodb_1 = require("mongodb");
// post database operations
const postRepositoryMongoDb = () => {
    const getAllPost = async () => {
        return await postModel_1.default.find().sort({ createdAt: -1 });
    };
    const uploadPost = (async (post) => {
        const newpost = new postModel_1.default(post);
        return await newpost.save();
    });
    const getPostsByUser = async (userId) => {
        return await postModel_1.default.find({ userId });
    };
    const getPostById = async (_id) => {
        const posts = await postModel_1.default.findById({ _id: new mongodb_1.ObjectId(_id) });
        return posts;
    };
    const deletePost = async (_id) => {
        const deletedData = await postModel_1.default.findByIdAndDelete({ _id: new mongodb_1.ObjectId(_id) });
        return deletedData;
    };
    const dislikePost = async (_id, userId) => {
        await postModel_1.default.findByIdAndUpdate({ _id }, { $pull: { likes: userId } });
    };
    const likePost = async (_id, userId) => {
        await postModel_1.default.findByIdAndUpdate({ _id }, { $push: { likes: userId } });
    };
    const insertComment = async (postId, userId, comment) => {
        const updateResult = await postModel_1.default.findByIdAndUpdate({ _id: postId }, {
            $push: { comments: { userId, comment, reply: [] } }
        });
        return updateResult;
    };
    const replyComment = async (_id, userId, comment, reply) => {
        const updateResult = await postModel_1.default.updateOne({ _id, "comments.comment": comment }, {
            $push: {
                "comments.$.reply": { userId, reply }
            }
        });
        return updateResult;
    };
    const editPost = async (_id, description) => {
        const updateResult = await postModel_1.default.findByIdAndUpdate({ _id }, {
            $set: { description }
        });
        return updateResult;
    };
    const reportPost = async (userId, postId, reason) => {
        const repostResponse = await postModel_1.default.findByIdAndUpdate({ _id: postId }, {
            $push: { reports: { userId, reason } }
        });
        return repostResponse;
    };
    const getReportedUsers = async (postId) => {
        const postDetails = await postModel_1.default.findOne({ _id: postId });
        const users = await Promise.all(postDetails.reports.map(async ({ userId }) => {
            return await userModel_1.default.findOne({ _id: userId });
        }));
        return users;
    };
    return {
        getAllPost,
        uploadPost,
        getPostsByUser,
        getPostById,
        deletePost,
        dislikePost,
        likePost,
        insertComment,
        replyComment,
        editPost,
        reportPost,
        getReportedUsers
    };
};
exports.postRepositoryMongoDb = postRepositoryMongoDb;
