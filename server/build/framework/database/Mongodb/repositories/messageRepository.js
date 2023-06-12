"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRepositoryMongoDB = void 0;
const MessageModal_1 = __importDefault(require("../models/MessageModal"));
const messageRepositoryMongoDB = () => {
    // create a message with a person based on their chatId
    const createMessage = async (chatId, senderId, message) => {
        const newMessage = new MessageModal_1.default({
            chatId,
            senderId,
            message
        });
        return await newMessage.save();
    };
    // get single person messages
    const getMessages = async (chatId) => {
        return await MessageModal_1.default.find({ chatId });
    };
    return {
        createMessage,
        getMessages
    };
};
exports.messageRepositoryMongoDB = messageRepositoryMongoDB;
