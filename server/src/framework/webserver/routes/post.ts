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
    router.post('/',upload.single('image'), controller.uploadPost);

    // get posts by a user
    router.get('/userposts/:userId', controller.getUserPosts)

    // get individual post by id
    router.get('/post/:id', controller.getPost)

    // delete particular post by id
    router.delete('/:id', controller.deletePost)

    // like and dilike post by user
    router.patch('/like', controller.postLikeUpdate)

    return router;
};
    
export default postRouter;