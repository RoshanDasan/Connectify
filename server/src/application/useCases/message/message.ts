import { HttpStatus } from "../../../types/httpstatuscodes";
import AppError from "../../../utilities/appError";
import { messageRepositoryInterfaceType } from "../../repositories/messageRepository";

// logics for creating a new message
export const createMessage = async (chatId: string, messageId: string, message: string, repository: ReturnType<messageRepositoryInterfaceType>) => {
    const createResponse = await repository.createMessage(chatId, messageId, message);
    if (!createResponse) return new AppError('User not created', HttpStatus.NOT_FOUND);
    return createResponse;
};

export const getMessages = async(chatId: string, repository: ReturnType<messageRepositoryInterfaceType>) => {
    const messages = await repository.getMessages(chatId);
    return messages;
}