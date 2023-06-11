import { chatRepositoryType } from "../../framework/database/Mongodb/repositories/chatRepositories";

export const chatRepositoriesInterface = (repository: ReturnType<chatRepositoryType>) => {

    // interface for create chat
    const createChat = async (senderId: string, recieverId: string) => {
        const createChat = await repository.createChat(senderId, recieverId);
        return createChat;
    };

    const getAllchat = async (userId: string) => {
        const chats = await repository.getAllchat(userId);
        return chats
    }

    const getChat = async (firstId: string, secondId: string) => {
        const chat = await repository.getChat(firstId, secondId);
        return chat;
    }

    return {
        createChat,
        getAllchat,
        getChat
    }
};

export type chatRepositoriesInterfaceType = typeof chatRepositoriesInterface;