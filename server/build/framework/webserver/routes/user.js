"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = __importDefault(require("../../../adapters/controllers/userControllers"));
const userDbRepositories_1 = require("../../../application/repositories/userDbRepositories");
const userRepositories_1 = require("../../database/Mongodb/repositories/userRepositories");
const multerServices_1 = require("../../services/multerServices");
const userRouter = () => {
    const router = express_1.default.Router();
    const controllers = (0, userControllers_1.default)(userDbRepositories_1.userDbRepository, userRepositories_1.userRepositoryMongoDB);
    router.get('/all/:id', controllers.getAllUsers);
    router.get('/:id', controllers.getUserById);
    router.patch('/request/:id/:friendId', controllers.sendRequest);
    router.get('/followers/:id', controllers.getFollowersList);
    router.get('/followings/:id', controllers.getFollowingsList);
    router.patch('/', controllers.unfollowUser);
    router.patch('/request/friend/:id/:friendId', controllers.responseFriendRequest);
    router.get('/search/:prefix', controllers.searchUser);
    router.put('/:id', multerServices_1.upload.single('file'), controllers.updateProfile);
    router.patch('/:userId/:blockId', controllers.blockUser);
    return router;
};
exports.default = userRouter;
