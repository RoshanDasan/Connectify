import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { postRepositoryType } from "../../framework/database/Mongodb/repositories/postRepositeries";
import { postDbInterfaceType } from "../../application/repositories/postDbRepositories";
import { getAllPost, postCreate, getPostsByUser, getPostById, deletePostById, updateLike, insertComment, deleteComment, postEdit, postReport, getReportedUsers } from '../../application/useCases/post/post'   

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
        console.log(image);
        console.log(req.body);
        
        
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

    const commentPost = expressAsyncHandler(async(req: Request, res: Response) => {
        const { postId, userId } = req.params;
        console.log(req.body);
        
        const { comment } = req.body
        console.log(comment);
        
        const updateResult = await insertComment(postId, userId, comment, dbRepositoriesPost)

        console.log(updateResult);
        
        res.json({
            status: 'comment success',
            comment: updateResult
        })
    })

    const commentDelete = expressAsyncHandler( async(req: Request, res: Response) => {
        const { postId, index } = req.params;
        console.log(postId, index);
        
        const deleteResult = await deleteComment(postId, index, dbRepositoriesPost)

        res.json({
            status: 'comment deleted',
            deletedComment: deleteResult
        })
    })

    const editPost = expressAsyncHandler(async (req: Request, res: Response) => {
        const { postId } = req.params;
        const { description } = req.body;
        
        const postEditResult: any = await postEdit(postId, description, dbRepositoriesPost)

        res.json({
            status: 'post update success',
            response: postEditResult
        })
    })

    const reportPost = expressAsyncHandler(async (req: Request, res: Response) => {
        const { userId, postId } = req.params;
        const { reason } = req.body;

        const repostResponse = await postReport(userId, postId, reason, dbRepositoriesPost)
        res.json({
            status: 'posted success',
            response: repostResponse
        })
    })

    const getReporters = expressAsyncHandler(async (req: Request, res: Response) => {
        const { postId } = req.params;
        const users = await getReportedUsers(postId, dbRepositoriesPost);
        res.json({
            status: 'reposted users fetched',
            users
        })
    })


    return {
        getPosts,
        uploadPost,
        getUserPosts,
        getPost,
        deletePost,
        postLikeUpdate,
        commentPost,
        commentDelete,
        editPost,
        reportPost,
        getReporters
    }
}

export default postControllers;