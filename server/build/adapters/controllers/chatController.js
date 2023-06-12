"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const chat_1 = require("../../application/useCases/chat/chat");
const chatController = (chatRepositoriesInterfaceType, chatRepositoryType) => {
    const chatRepositeries = chatRepositoriesInterfaceType(chatRepositoryType());
    const chatCreate = (0, express_async_handler_1.default)(async (req, res) => {
        const { senderId, recieverId } = req.params;
        const newChat = await (0, chat_1.createChat)(senderId, recieverId, chatRepositeries);
        res.json({
            status: 'success',
            chats: newChat
        });
    });
    const getChats = (0, express_async_handler_1.default)(async (req, res) => {
        const { userId } = req.params;
        const chats = await (0, chat_1.getAllchats)(userId, chatRepositeries);
        res.json({
            status: 'success',
            chats
        });
    });
    const getSingleChat = (0, express_async_handler_1.default)(async (req, res) => {
        const { firstId, secondId } = req.params;
        const chat = await (0, chat_1.getChat)(firstId, secondId, chatRepositeries);
        res.json({
            status: 'success',
            chat
        });
    });
    return {
        chatCreate,
        getChats,
        getSingleChat
    };
};
exports.default = chatController;
