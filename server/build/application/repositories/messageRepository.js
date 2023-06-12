"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRepositoryInterface = void 0;
const messageRepositoryInterface = (repository) => {
    const createMessage = async (chatId, senderId, message) => {
        const createResponse = await repository.createMessage(chatId, senderId, message);
        return createResponse;
    };
    const getMessages = async (chatId) => {
        return repository.getMessages(chatId);
    };
    return {
        createMessage,
        getMessages
    };
};
exports.messageRepositoryInterface = messageRepositoryInterface;
