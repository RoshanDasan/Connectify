"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authControllers_1 = __importDefault(require("../../../adapters/controllers/authControllers"));
const userDbRepositories_1 = require("../../../application/repositories/userDbRepositories");
const userRepositories_1 = require("../../database/Mongodb/repositories/userRepositories");
const authServiceInterface_1 = require("../../../application/services/authServiceInterface");
const authServices_1 = require("../../services/authServices");
const authRouter = () => {
    const router = express_1.default.Router();
    const controllers = (0, authControllers_1.default)(authServiceInterface_1.authServiceInterface, authServices_1.authServices, userDbRepositories_1.userDbRepository, userRepositories_1.userRepositoryMongoDB);
    router.post('/register', controllers.registerUser);
    router.post('/login', controllers.loginUser);
    router.post('/google_auth', controllers.googleAuth);
    router.patch('/user/block/:id', controllers.blockUser);
    return router;
};
exports.default = authRouter;
