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
    router.get('/', controller.getPosts);
    router.post('/', multerServices_1.uploads.single('image'), controller.uploadPost);
    return router;
};
exports.default = postRouter;
