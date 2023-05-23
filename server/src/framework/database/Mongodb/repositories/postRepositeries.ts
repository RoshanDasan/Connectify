import Post from "../models/postModel";

// post database operations

export const postRepositoryMongoDb = () => {

    const getAllPost = async () => {
        return await Post.find()
    }


    return {
        getAllPost
    }
}

export type postRepositoryType = typeof postRepositoryMongoDb;