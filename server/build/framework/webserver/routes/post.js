"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postControllers_1 = __importDefault(require("../../../adapters/controllers/postControllers"));
const postDbRepositories_1 = require("../../../application/repositories/postDbRepositories");
const postRepositeries_1 = require("../../database/Mongodb/repositories/postRepositeries");
const multerServices_1 = require("../../services/multerServices");
const postRouter = () => {
    const router = express_1.default.Router();
    const controller = (0, postControllers_1.default)(postDbRepositories_1.postDbInterface, postRepositeries_1.postRepositoryMongoDb);
    // get all posts from db
    router.get('/', controller.getPosts);
    // upload post
    router.post('/', multerServices_1.upload.single('image'), controller.uploadPost);
    // edit post
    router.put('/edit_post/:postId', controller.editPost);
    // get posts by a user
    router.get('/userposts/:userId', controller.getUserPosts);
    // get individual post by id
    router.get('/post/:id', controller.getPost);
    // delete particular post by id
    router.delete('/:id', controller.deletePost);
    // like and dilike post by user
    router.patch('/like', controller.postLikeUpdate);
    // push comment in post
    router.patch('/comment/:postId/:userId', controller.commentPost);
    // delete comment in post
    router.delete('/delete_comment/:postId/:index', controller.commentDelete);
    // report post
    router.post('/report/:userId/:postId', controller.reportPost);
    // get reported users
    router.get('/reported/:postId', controller.getReporters);
    return router;
};
exports.default = postRouter;
