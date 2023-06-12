"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const message_1 = require("../../application/useCases/message/message");
const messageController = (messageRepositoryInterface, messageRepositoryMongoDB) => {
    const messageRepository = messageRepositoryInterface(messageRepositoryMongoDB());
    const createNewMessage = (0, express_async_handler_1.default)(async (req, res) => {
        const { chatId, senderId, message } = req.body;
        const createResponse = await (0, message_1.createMessage)(chatId, senderId, message, messageRepository);
        res.json({
            status: 'success',
            response: createResponse
        });
    });
    const getUserMessages = (0, express_async_handler_1.default)(async (req, res) => {
        const { chatId } = req.params;
        const messages = await (0, message_1.getMessages)(chatId, messageRepository);
        res.json({
            status: 'Message fetch success',
            messages
        });
    });
    return {
        createNewMessage,
        getUserMessages
    };
};
exports.default = messageController;
