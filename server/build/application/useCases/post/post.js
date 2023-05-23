"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPost = void 0;
const getAllPost = async (repositories) => {
    const posts = await repositories.getAllPost();
    return posts;
};
exports.getAllPost = getAllPost;
