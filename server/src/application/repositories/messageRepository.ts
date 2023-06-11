import { messageRepositoryMongoDBType } from "../../framework/database/Mongodb/repositories/messageRepository";

export const messageRepositoryInterface = (repository: ReturnType<messageRepositoryMongoDBType>) => {
    const createMessage = async (chatId: string, senderId: string, message: any) => {
        const createResponse = await repository.createMessage(chatId, senderId, message);
        return createResponse;
    }

    const getMessages = async(chatId: string) => {
        return repository.getMessages(chatId);
    }

    return {
        createMessage,
        getMessages
    }
}

export type messageRepositoryInterfaceType = typeof messageRepositoryInterface;