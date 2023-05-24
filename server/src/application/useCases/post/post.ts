import { HttpStatus } from "../../../types/httpstatuscodes";
import AppError from "../../../utilities/appError";
import { postDbInterfaceType } from "../../repositories/postDbRepositories";

export const getAllPost = async (repositories: ReturnType<postDbInterfaceType>) => {
  const posts =  await repositories.getAllPost()
  if(!posts){
    return new AppError('Post not available', HttpStatus.BAD_REQUEST)
  }
  return posts;
}

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
    return new AppError('Uploading failed', HttpStatus.BAD_REQUEST)
  }
}


