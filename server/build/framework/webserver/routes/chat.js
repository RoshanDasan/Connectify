"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chatController_1 = __importDefault(require("../../../adapters/controllers/chatController"));
const chatRepositeries_1 = require("../../../application/repositories/chatRepositeries");
const chatRepositories_1 = require("../../database/Mongodb/repositories/chatRepositories");
const chatRouter = () => {
    const router = express_1.default.Router();
    const controllers = (0, chatController_1.default)(chatRepositeries_1.chatRepositoriesInterface, chatRepositories_1.chatRepositoryMongoDB);
    // create new chat box between two users
    router.post('/:senderId/:recieverId', controllers.chatCreate);
    // get all chats by user
    router.get('/:userId', controllers.getChats);
    // get single chat
    router.get('/:firstId/:secondId', controllers.getSingleChat);
    return router;
};
exports.default = chatRouter;
