"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRepositoryMongoDb = void 0;
const postModel_1 = __importDefault(require("../models/postModel"));
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
    return {
        getAllPost,
        uploadPost,
        getPostsByUser,
        getPostById,
        deletePost,
        dislikePost,
        likePost
    };
};
exports.postRepositoryMongoDb = postRepositoryMongoDb;
