"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessages = exports.createMessage = void 0;
const httpstatuscodes_1 = require("../../../types/httpstatuscodes");
const appError_1 = __importDefault(require("../../../utilities/appError"));
// logics for creating a new message
const createMessage = async (chatId, messageId, message, repository) => {
    const createResponse = await repository.createMessage(chatId, messageId, message);
    if (!createResponse)
        return new appError_1.default('User not created', httpstatuscodes_1.HttpStatus.NOT_FOUND);
    return createResponse;
};
exports.createMessage = createMessage;
const getMessages = async (chatId, repository) => {
    const messages = await repository.getMessages(chatId);
    return messages;
};
exports.getMessages = getMessages;
