import { HttpStatus } from "../../../types/httpstatuscodes";
import AppError from "../../../utilities/appError";
import { postDbInterfaceType } from "../../repositories/postDbRepositories";

// bussiness logics...

// find all posts from the database
export const getAllPost = async (repositories: ReturnType<postDbInterfaceType>) => {
  const posts = await repositories.getAllPost()
  if (!posts) {
    throw new AppError('Post not available', HttpStatus.BAD_REQUEST)
  }
  return posts;
};

// create a post
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
  if (!newpost) {
    throw new AppError('Uploading failed', HttpStatus.BAD_REQUEST)
  }
  return newpost
};

// get all post by a user
export const getPostsByUser = async (userId: any, repositories: ReturnType<postDbInterfaceType>) => {
  const posts = await repositories.getPostsByUser(userId)
  return posts;
};

// get a single post by postId
export const getPostById = async (id: any, repositories: ReturnType<postDbInterfaceType>) => {
  const post = await repositories.getPostById(id)


  return post;
}

//delete a particular post by postId
export const deletePostById = async (id: any, repositories: ReturnType<postDbInterfaceType>) => {
  const deletedData = await repositories.deletePost(id)
  if (!deletedData) {
    throw new AppError('No data found for delete', HttpStatus.BAD_REQUEST)
  }
  return deletedData
}

// like or dislike post 
export const updateLike = async (id: any, userId: any, repositories: ReturnType<postDbInterfaceType>) => {

  // find the post by id
  const post = await repositories.getPostById(id);

  // check weather user is already liked this post of not
  if (post.likes.includes(userId)) {

    // if user already liked the post

    await repositories.dislikePost(id, userId);
  }
  else {
    // else user not liked the post

    await repositories.likePost(id, userId);
  }


};

// add comment to a particular post by postId
export const insertComment = async (postId: string, userId: string, comment: string, repositories: ReturnType<postDbInterfaceType>) => {

  const commentResult = await repositories.insertComment(postId, userId, comment);

  return commentResult;
}

// delete a particulat comment using index number
export const deleteComment = async (postId: string, index: string, repositories: ReturnType<postDbInterfaceType>) => {
  const { comments } = await repositories.getPostById(postId);
  comments.splice(index, 1);
  const updateResult = await repositories.pushComment(postId, comments);
  return updateResult;
}


// edit post 
export const postEdit = async (postId: string, body: any,  repositories: ReturnType<postDbInterfaceType>) => {
  const commentResult = await repositories.editPost(postId, body);

  return commentResult;
}

// report post 
export const postReport = async (userId: string, postId: string, reason: any, repositories: ReturnType<postDbInterfaceType>) => {
  const response = await repositories.reportPost(userId, postId, reason)
  return response;
}

export const getReportedUsers = async(postId: string, repositories: ReturnType<postDbInterfaceType>) => {
  const users = await repositories.getReportedUsers(postId)
  return users;
}




