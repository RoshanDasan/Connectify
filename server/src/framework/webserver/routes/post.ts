import express from "express";
import postControllers from "../../../adapters/controllers/postControllers";
import { postDbInterface } from "../../../application/repositories/postDbRepositories";
import { postRepositoryMongoDb } from "../../database/Mongodb/repositories/postRepositeries";
import { uploads } from "../../services/multerServices";

const  postRouter = () => {
    const router = express.Router();
    const controller = postControllers(postDbInterface, postRepositoryMongoDb);

    router.get('/', controller.getPosts);
    router.post('/',uploads.single('image'), controller.uploadPost);

    return router;
};
    
export default postRouter;