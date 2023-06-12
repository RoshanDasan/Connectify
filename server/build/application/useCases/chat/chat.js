"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChat = exports.getAllchats = exports.createChat = void 0;
const httpstatuscodes_1 = require("../../../types/httpstatuscodes");
const appError_1 = __importDefault(require("../../../utilities/appError"));
const createChat = async (senderId, recieverId, repository) => {
    const chat = await repository.createChat(senderId, recieverId);
    if (!chat) {
        throw new appError_1.default('User not found', httpstatuscodes_1.HttpStatus.UNAUTHORIZED);
    }
    return chat;
};
exports.createChat = createChat;
const getAllchats = async (userId, repository) => {
    const getChats = await repository.getAllchat(userId);
    return getChats;
};
exports.getAllchats = getAllchats;
const getChat = async (firstId, secondId, repository) => {
    const chat = await repository.getChat(firstId, secondId);
    return chat;
};
exports.getChat = getChat;
