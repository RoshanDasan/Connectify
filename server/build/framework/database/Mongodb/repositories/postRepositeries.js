"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRepositoryMongoDb = void 0;
const postModel_1 = __importDefault(require("../models/postModel"));
// post database operations
const postRepositoryMongoDb = () => {
    const getAllPost = async () => {
        return await postModel_1.default.find().sort({ createdAt: -1 });
    };
    const uploadPost = (async (post) => {
        console.log(post, 'save post');
        const newpost = new postModel_1.default(post);
        return await newpost.save();
    });
    return {
        getAllPost,
        uploadPost
    };
};
exports.postRepositoryMongoDb = postRepositoryMongoDb;
