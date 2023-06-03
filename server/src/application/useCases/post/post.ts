import { HttpStatus } from "../../../types/httpstatuscodes";
import AppError from "../../../utilities/appError";
import { postDbInterfaceType } from "../../repositories/postDbRepositories";

export const getAllPost = async (repositories: ReturnType<postDbInterfaceType>) => {
  const posts =  await repositories.getAllPost()
  if(!posts){
    throw new AppError('Post not available', HttpStatus.BAD_REQUEST)
  }
  return posts;
};

export const postCreate = async (
  postDetails: {
    userId: string;
    description: string;
    image: string;
    userName: string;
  },
  respositories: ReturnType<postDbInterfaceType>
) => {
  const newpost = await respositories.uploadPost(postDetails)
  if(!newpost) {
    throw new AppError('Uploading failed', HttpStatus.BAD_REQUEST)
  }
  return newpost
};

export const getPostsByUser = async (userId: any, repositories: ReturnType<postDbInterfaceType>) => {
  const posts = await repositories.getPostsByUser(userId)
  return posts;
};

export const getPostById = async (id: any, repositories: ReturnType<postDbInterfaceType>) => {
  const post = await repositories.getPostById(id)

  
  return post;
}

export const deletePostById = async (id: any, repositories: ReturnType<postDbInterfaceType>) => {
  const deletedData = await repositories.deletePost(id)
  if(!deletedData) {
   throw new AppError('No data found for delete', HttpStatus.BAD_REQUEST)
  }
  return deletedData
}

export const updateLike  = async (id: any, userId: any, repositories: ReturnType<postDbInterfaceType>) => {

  // find the post by id
  const post = await repositories.getPostById(id);
  
  // check weather user is already liked this post of not
  if(post.likes.includes(userId)) {
    
    // if user already liked the post
    
    await repositories.dislikePost(id, userId)
  }
  else {
    // else user not liked the post
     
    await repositories.likePost(id, userId)
  }

  
};



