import { postRepositoryType } from "../../framework/database/Mongodb/repositories/postRepositeries";

// post database operation interface

export const postDbInterface = (repositories: ReturnType<postRepositoryType>) => {

    const getAllPost = async () => await repositories.getAllPost()
    console.log('posttss');
    

    const uploadPost = async (post:{
        userId: string;
        description: string;
        image: string;
        userName: string;
    }) => repositories.uploadPost(post)

    return {
        getAllPost,
        uploadPost
    }
}

export type postDbInterfaceType = typeof postDbInterface;