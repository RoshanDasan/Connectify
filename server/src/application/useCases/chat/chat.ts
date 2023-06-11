import { HttpStatus } from "../../../types/httpstatuscodes";
import AppError from "../../../utilities/appError";
import { chatRepositoriesInterfaceType } from "../../repositories/chatRepositeries";

export const createChat = async (senderId: string, recieverId: string, repository: ReturnType<chatRepositoriesInterfaceType>) => {
    const chat = await repository.createChat(senderId, recieverId);
    if(!chat){
        throw new AppError('User not found', HttpStatus.UNAUTHORIZED);
    }
    return chat;
}

export const getAllchats = async (userId: string, repository: ReturnType<chatRepositoriesInterfaceType>) => {
    const getChats = await repository.getAllchat(userId);
    return getChats;
}

export const getChat = async(firstId: string, secondId: string,  repository: ReturnType<chatRepositoriesInterfaceType>) => {
    const chat = await repository.getChat(firstId, secondId);
    return chat;
}