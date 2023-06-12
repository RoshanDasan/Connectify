"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatRepositoriesInterface = void 0;
const chatRepositoriesInterface = (repository) => {
    // interface for create chat
    const createChat = async (senderId, recieverId) => {
        const createChat = await repository.createChat(senderId, recieverId);
        return createChat;
    };
    const getAllchat = async (userId) => {
        const chats = await repository.getAllchat(userId);
        return chats;
    };
    const getChat = async (firstId, secondId) => {
        const chat = await repository.getChat(firstId, secondId);
        return chat;
    };
    return {
        createChat,
        getAllchat,
        getChat
    };
};
exports.chatRepositoriesInterface = chatRepositoriesInterface;
