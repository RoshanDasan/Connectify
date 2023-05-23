import { HttpStatus } from "../../../types/httpstatuscodes";
import AppError from "../../../utilities/appError";
import { postDbInterfaceType } from "../../repositories/postDbRepositories";

export const getAllPost = async (repositories: ReturnType<postDbInterfaceType>) => {
  const posts =  await repositories.getAllPost()
  return posts;
}