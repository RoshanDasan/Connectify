"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminAuthController_1 = __importDefault(require("../../../adapters/controllers/adminAuthController"));
const adminDbRepositories_1 = require("../../../application/repositories/adminDbRepositories");
const adminRepositories_1 = require("../../database/Mongodb/repositories/adminRepositories");
const authServiceInterface_1 = require("../../../application/services/authServiceInterface");
const authServices_1 = require("../../services/authServices");
const adminauthRouter = () => {
    const router = express_1.default.Router();
    const controllers = (0, adminAuthController_1.default)(authServiceInterface_1.authServiceInterface, authServices_1.authServices, adminDbRepositories_1.adminDbRepository, adminRepositories_1.adminRepositoryMongoDB);
    router.post('/login', controllers.loginAdmin);
    return router;
};
exports.default = adminauthRouter;
