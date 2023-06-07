import { postRepositoryType } from "../../framework/database/Mongodb/repositories/postRepositeries";

// post database operation interface

export const postDbInterface: any = (repositories: ReturnType<postRepositoryType>) => {

    const getAllPost = async () => await repositories.getAllPost()
    

    const uploadPost = async (post:{
        userId: string;
        description: string;
        image: string;
        userName: string;
    }) => { return repositories.uploadPost(post)}


    const getPostsByUser = async (userId: string) => {
        return await repositories.getPostsByUser(userId)
    };

    const getPostById =async (id:string) => {
        return await repositories.getPostById(id)
    }

    const deletePost = async (id: string) => {
        const deletedData = await repositories.deletePost(id)
        return deletedData;
    }

    const dislikePost = async (id: string, userId: string) => {
        await repositories.dislikePost(id, userId)
    }

    const likePost = async (id: string, userId: string) => {
        await repositories.likePost(id, userId)
    }

    const insertComment = async(postId: string, userId: string, comment: string) => {
        const insertResult = await repositories.insertComment(postId, userId, comment);
        return insertResult
    }

    const pushComment = async(postId: string, comments: any) => {
        const updateResult = await repositories.pushComment(postId, comments);
        return updateResult;
    }

    const editPost = async(postId: string, body: any) => {
        const editPost = await repositories.editPost(postId, body)
        return editPost
    }

    const reportPost = async(userId: string, postId: string, reason: any) => {
        const repostResponse = await repositories.reportPost(userId, postId, reason);
        return repostResponse;
    }

    const getReportedUsers = async (postId: string) => {
        const users = await repositories.getReportedUsers(postId);
        return users;
    }

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

    }
}

export type postDbInterfaceType = typeof postDbInterface;