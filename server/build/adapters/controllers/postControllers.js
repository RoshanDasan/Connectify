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
        console.log('postttt');
        const posts = await (0, post_1.getAllPost)(dbRepositoriesPost);
        res.json({
            status: "success",
            posts
        });
    });
    const uploadPost = (0, express_async_handler_1.default)(async (req, res) => {
        const { userId, description, userName } = req.body;
        const image = req?.file?.filename;
        console.log(image, 'imagee');
        const body = { userId, description, userName, image };
        await (0, post_1.postCreate)(body, dbRepositoriesPost);
        res.json({
            status: 'upload-success',
            body
        });
    });
    return {
        getPosts,
        uploadPost
    };
};
exports.default = postControllers;
