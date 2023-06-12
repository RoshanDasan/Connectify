"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messageController_1 = __importDefault(require("../../../adapters/controllers/messageController"));
const messageRepository_1 = require("../../../application/repositories/messageRepository");
const messageRepository_2 = require("../../database/Mongodb/repositories/messageRepository");
const messageRouter = () => {
    const router = express_1.default.Router();
    const controller = (0, messageController_1.default)(messageRepository_1.messageRepositoryInterface, messageRepository_2.messageRepositoryMongoDB);
    router.post('/', controller.createNewMessage);
    router.get('/:chatId', controller.getUserMessages);
    return router;
};
exports.default = messageRouter;
