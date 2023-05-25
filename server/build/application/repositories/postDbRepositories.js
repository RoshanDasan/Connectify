"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postDbInterface = void 0;
// post database operation interface
const postDbInterface = (repositories) => {
    const getAllPost = async () => await repositories.getAllPost();
    const uploadPost = async (post) => repositories.uploadPost(post);
    return {
        getAllPost,
        uploadPost
    };
};
exports.postDbInterface = postDbInterface;
