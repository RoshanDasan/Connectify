"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = __importDefault(require("../../../adapters/controllers/userControllers"));
const userDbRepositories_1 = require("../../../application/repositories/userDbRepositories");
const userRepositories_1 = require("../../database/Mongodb/repositories/userRepositories");
const userRouter = () => {
    const router = express_1.default.Router();
    const controllers = (0, userControllers_1.default)(userDbRepositories_1.userDbRepository, userRepositories_1.userRepositoryMongoDB);
    router.get('/:id', controllers.getUserById);
    return router;
};
exports.default = userRouter;
