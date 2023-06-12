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
        console.log(image);
        console.log(req.body);
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
    const commentPost = (0, express_async_handler_1.default)(async (req, res) => {
        const { postId, userId } = req.params;
        console.log(req.body);
        const { comment } = req.body;
        console.log(comment);
        const updateResult = await (0, post_1.insertComment)(postId, userId, comment, dbRepositoriesPost);
        console.log(updateResult);
        res.json({
            status: 'comment success',
            comment: updateResult
        });
    });
    const commentDelete = (0, express_async_handler_1.default)(async (req, res) => {
        const { postId, index } = req.params;
        console.log(postId, index);
        const deleteResult = await (0, post_1.deleteComment)(postId, index, dbRepositoriesPost);
        res.json({
            status: 'comment deleted',
            deletedComment: deleteResult
        });
    });
    const editPost = (0, express_async_handler_1.default)(async (req, res) => {
        const { postId } = req.params;
        const { description } = req.body;
        const postEditResult = await (0, post_1.postEdit)(postId, description, dbRepositoriesPost);
        res.json({
            status: 'post update success',
            response: postEditResult
        });
    });
    const reportPost = (0, express_async_handler_1.default)(async (req, res) => {
        const { userId, postId } = req.params;
        const { reason } = req.body;
        const repostResponse = await (0, post_1.postReport)(userId, postId, reason, dbRepositoriesPost);
        res.json({
            status: 'posted success',
            response: repostResponse
        });
    });
    const getReporters = (0, express_async_handler_1.default)(async (req, res) => {
        const { postId } = req.params;
        const users = await (0, post_1.getReportedUsers)(postId, dbRepositoriesPost);
        res.json({
            status: 'reposted users fetched',
            users
        });
    });
    return {
        getPosts,
        uploadPost,
        getUserPosts,
        getPost,
        deletePost,
        postLikeUpdate,
        commentPost,
        commentDelete,
        editPost,
        reportPost,
        getReporters
    };
};
exports.default = postControllers;
