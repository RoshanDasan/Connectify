import { postRepositoryType } from "../../framework/database/Mongodb/repositories/postRepositeries";

// post database operation interface

export const postDbInterface = (repositories: ReturnType<postRepositoryType>) => {

    const getAllPost = async () => await repositories.getAllPost()

    return {
        getAllPost
    }
}

export type postDbInterfaceType = typeof postDbInterface;