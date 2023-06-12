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
    const insertComment = async (postId, userId, comment) => {
        const insertResult = await repositories.insertComment(postId, userId, comment);
        return insertResult;
    };
    const pushComment = async (postId, comments) => {
        const updateResult = await repositories.pushComment(postId, comments);
        return updateResult;
    };
    const editPost = async (postId, body) => {
        const editPost = await repositories.editPost(postId, body);
        return editPost;
    };
    const reportPost = async (userId, postId, reason) => {
        const repostResponse = await repositories.reportPost(userId, postId, reason);
        return repostResponse;
    };
    const getReportedUsers = async (postId) => {
        const users = await repositories.getReportedUsers(postId);
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
        pushComment,
        editPost,
        reportPost,
        getReportedUsers
    };
};
exports.postDbInterface = postDbInterface;
