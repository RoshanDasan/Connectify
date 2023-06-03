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

    return {
        getAllPost,
        uploadPost,
        getPostsByUser,
        getPostById,
        deletePost,
        dislikePost,
        likePost
    }
}

export type postDbInterfaceType = typeof postDbInterface;