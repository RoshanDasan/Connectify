"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postDbInterface = void 0;
// post database operation interface
const postDbInterface = (repositories) => {
    const getAllPost = async () => await repositories.getAllPost();
    return {
        getAllPost
    };
};
exports.postDbInterface = postDbInterface;
