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
        return await postModel_1.default.find();
    };
    return {
        getAllPost
    };
};
exports.postRepositoryMongoDb = postRepositoryMongoDb;
