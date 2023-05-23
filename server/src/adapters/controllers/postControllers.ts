import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { postRepositoryType } from "../../framework/database/Mongodb/repositories/postRepositeries";
import { postDbInterfaceType } from "../../application/repositories/postDbRepositories";
import { getAllPost } from '../../application/useCases/post/post'   

const postControllers = (postDbInterface: postDbInterfaceType, postRepositoryType: postRepositoryType ) => {

    const dbRepositoriesPost = postDbInterface(postRepositoryType())

    const getPosts = expressAsyncHandler (async( req: Request, res: Response ) => {
        console.log('postttt')
        const posts = await getAllPost(dbRepositoriesPost)
        res.json({
            status: "success",
            posts
        })
    })

    return {
        getPosts
    }
}

export default postControllers;