"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const post_1 = require("../../application/useCases/post/post");
const postControllers = (postDbInterface, postRepositoryType) => {
    const dbRepositoriesPost = postDbInterface(postRepositoryType());
    const getPosts = (0, express_async_handler_1.default)(async (req, res) => {
        const posts = await (0, post_1.getAllPost)(dbRepositoriesPost);
        res.json({
            status: "success",
            posts
        });
    });
    const uploadPost = (0, express_async_handler_1.default)(async (req, res) => {
        const { userId, description, userName } = req.body;
        const image = req?.file?.filename;
        const body = { userId, description, userName, image };
        const newPost = await (0, post_1.postCreate)(body, dbRepositoriesPost);
        res.json({
            status: 'upload-success',
            newPost
        });
    });
    const getUserPosts = (0, express_async_handler_1.default)(async (req, res) => {
        const { userId } = req.params;
        const posts = await (0, post_1.getPostsByUser)(userId, dbRepositoriesPost);
        res.json({
            status: 'posts find success',
            posts
        });
    });
    const getPost = (0, express_async_handler_1.default)(async (req, res) => {
        const { id } = req.params;
        const post = await (0, post_1.getPostById)(id, dbRepositoriesPost);
        res.json({
            status: 'post find success',
            post
        });
    });
    const deletePost = (0, express_async_handler_1.default)(async (req, res) => {
        const { id } = req.params;
        const deletedData = await (0, post_1.deletePostById)(id, dbRepositoriesPost);
        res.json({
            status: 'Deleted success',
            deletedData
        });
    });
    const postLikeUpdate = (0, express_async_handler_1.default)(async (req, res) => {
        const { id, userId } = req.query;
        await (0, post_1.updateLike)(id, userId, dbRepositoriesPost);
        console.log('liked success');
        res.json({
            status: 'like update success'
        });
    });
    return {
        getPosts,
        uploadPost,
        getUserPosts,
        getPost,
        deletePost,
        postLikeUpdate
    };
};
exports.default = postControllers;
