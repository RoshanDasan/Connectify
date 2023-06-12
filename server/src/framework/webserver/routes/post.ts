import express from "express";
import postControllers from "../../../adapters/controllers/postControllers";
import { postDbInterface } from "../../../application/repositories/postDbRepositories";
import { postRepositoryMongoDb } from "../../database/Mongodb/repositories/postRepositeries";
import { upload } from "../../services/multerServices";

const  postRouter = () => {
    const router = express.Router();
    const controller = postControllers(postDbInterface, postRepositoryMongoDb);

    // get all posts from db
    router.get('/', controller.getPosts);

    // upload post
    router.post('/', upload.single('image'), controller.uploadPost);

    // edit post
    router.put('/edit_post/:postId', controller.editPost)

    // get posts by a user
    router.get('/userposts/:userId', controller.getUserPosts)

    // get individual post by id
    router.get('/post/:id', controller.getPost)

    // delete particular post by id
    router.delete('/:id', controller.deletePost)

    // like and dilike post by user
    router.patch('/like', controller.postLikeUpdate)

    // push comment in post
    router.patch('/comment/:postId/:userId', controller.commentPost)

    // delete comment in post
    router.delete('/delete_comment/:postId/:index', controller.commentDelete)

    // report post
    router.post('/report/:userId/:postId', controller.reportPost)

    // get reported users
    router.get('/reported/:postId', controller.getReporters)

    return router;
};
    
export default postRouter;
