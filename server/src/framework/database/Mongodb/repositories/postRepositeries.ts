import Post from "../models/postModel";
import { ObjectId } from 'mongodb'

// post database operations

export const postRepositoryMongoDb = () => {

    const getAllPost = async () => {
        return await Post.find().sort({ createdAt: -1 });
    }

    const uploadPost = (async (post: {
        userId: string;
        description: string;
        image: string;
        userName: string;
    }) => {
        const newpost = new Post(post);
        return await newpost.save();
    })

    const getPostsByUser = async (userId: any) => {
        return await Post.find({ userId })
    }

    const getPostById = async (_id: string) => {
        const posts =  await Post.findById({ _id: new ObjectId(_id) })
        
        return posts;
    }

    const deletePost = async (_id: string) => {
        
        const deletedData =  await Post.findByIdAndDelete({ _id: new ObjectId(_id)  })

        return deletedData
    }

    const dislikePost = async (_id: string, userId: string) => {
        await Post.findByIdAndUpdate({ _id },
            {$pull:{likes: userId}})
    }

    const likePost = async (_id: string, userId: string) => {
        
        await Post.findByIdAndUpdate({ _id },
            { $push: {likes: userId}})
    }
    const insertComment = async (postId: string, userId: string, comment: string) => {
        const updateResult = await Post.findByIdAndUpdate({_id: postId},{
            $push:{comments:{userId, comment}}
        });
        
        return updateResult;
    }

    const pushComment = async (postId: string, comments: any) => {
        const updateResult = await Post.findByIdAndUpdate({_id: postId},{
            $set: {comments}
        })

        return updateResult;
    }

    const editPost = async (_id: string, description: any) => {
        const updateResult = await Post.findByIdAndUpdate({_id},{
            $set:{description}
        })
        return updateResult
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
        editPost
    }
}

export type postRepositoryType = typeof postRepositoryMongoDb;