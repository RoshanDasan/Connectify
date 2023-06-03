import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { postRepositoryType } from "../../framework/database/Mongodb/repositories/postRepositeries";
import { postDbInterfaceType } from "../../application/repositories/postDbRepositories";
import { getAllPost, postCreate, getPostsByUser, getPostById, deletePostById, updateLike } from '../../application/useCases/post/post'   

const postControllers = (postDbInterface: postDbInterfaceType, postRepositoryType: postRepositoryType ) => {

    const dbRepositoriesPost = postDbInterface(postRepositoryType())

    const getPosts = expressAsyncHandler (async( req: Request, res: Response ) => {
        const posts = await getAllPost(dbRepositoriesPost)
        res.json({
            status: "success",
            posts
        })
    })

    const uploadPost = expressAsyncHandler(async (req: Request, res: Response) => {
        const { userId, description, userName } = req.body;
        const image: any = req?.file?.filename;
        
        
        const body = {userId, description, userName, image};
        const newPost = await postCreate(body,dbRepositoriesPost );
        
        
        res.json({
            status:'upload-success',
            newPost
        }) 
        
    })

    const getUserPosts = expressAsyncHandler(async (req: Request, res: Response) => {
        const { userId } = req.params;
        const posts: any = await getPostsByUser(userId, dbRepositoriesPost);
        res.json({
            status: 'posts find success',
            posts
        })
    })

    const getPost = expressAsyncHandler(async (req: Request, res: Response) => {
        const { id } = req.params;
        const post: any = await getPostById(id, dbRepositoriesPost);
        
        
    
        res.json({
            status: 'post find success',
            post
        })
    })

    const deletePost = expressAsyncHandler(async (req: Request, res: Response) => {
        const { id } = req.params;
        const deletedData = await deletePostById(id, dbRepositoriesPost)

        res.json({
            status: 'Deleted success',
            deletedData
        })

    })

    const postLikeUpdate = expressAsyncHandler(async(req: Request, res: Response) => {
        
        const { id, userId } = req.query;
       await updateLike(id, userId, dbRepositoriesPost)
       console.log('liked success');
       
       res.json({
        status:'like update success'
       })
        
    })


    return {
        getPosts,
        uploadPost,
        getUserPosts,
        getPost,
        deletePost,
        postLikeUpdate
    }
}

export default postControllers;