"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postDbInterface = void 0;
// post database operation interface
const postDbInterface = (repositories) => {
    const getAllPost = async () => await repositories.getAllPost();
    const uploadPost = async (post) => { return repositories.uploadPost(post); };
    const getPostsByUser = async (userId) => {
        return await repositories.getPostsByUser(userId);
    };
    const getPostById = async (id) => {
        return await repositories.getPostById(id);
    };
    const deletePost = async (id) => {
        const deletedData = await repositories.deletePost(id);
        return deletedData;
    };
    const dislikePost = async (id, userId) => {
        await repositories.dislikePost(id, userId);
    };
    const likePost = async (id, userId) => {
        await repositories.likePost(id, userId);
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
exports.postDbInterface = postDbInterface;
