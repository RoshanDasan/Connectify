import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { postRepositoryType } from "../../framework/database/Mongodb/repositories/postRepositeries";
import { postDbInterfaceType } from "../../application/repositories/postDbRepositories";
import { getAllPost,postCreate } from '../../application/useCases/post/post'   

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

    const uploadPost = expressAsyncHandler(async (req: Request, res: Response) => {
        const { userId, description, userName } = req.body;
        const image: any = req?.file?.filename;
        console.log(image,'imagee');
        
        const body = {userId, description, userName, image};
        await postCreate(body,dbRepositoriesPost );
        
        
        res.json({
            status:'upload-success',
            body
        }) 
        
    })

    return {
        getPosts,
        uploadPost
    }
}

export default postControllers;