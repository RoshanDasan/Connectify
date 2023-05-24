import Post from "../models/postModel";

// post database operations

export const postRepositoryMongoDb = () => {

    const getAllPost = async () => {
        return await Post.find()
    }
    const uploadPost = (async (post:{
        userId: string;
        description: string;
        image: string;
        userName: string;
    }) => {
        console.log(post,'save post');
        
        const newpost = new Post(post);
        return await newpost.save();
    })
    


    return {
        getAllPost,
        uploadPost
    }
}

export type postRepositoryType = typeof postRepositoryMongoDb;