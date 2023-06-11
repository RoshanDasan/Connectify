import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { messageRepositoryInterfaceType } from "../../application/repositories/messageRepository";
import { messageRepositoryMongoDBType } from "../../framework/database/Mongodb/repositories/messageRepository";
import { createMessage, getMessages } from "../../application/useCases/message/message";

const messageController = (messageRepositoryInterface: messageRepositoryInterfaceType, messageRepositoryMongoDB: messageRepositoryMongoDBType) => {
    const messageRepository = messageRepositoryInterface(messageRepositoryMongoDB());

    const createNewMessage = expressAsyncHandler(async(req: Request, res: Response) => {
        const {chatId, senderId, message} = req.body;
        
        const createResponse = await createMessage(chatId, senderId, message, messageRepository);
        
        res.json({
            status: 'success',
            response: createResponse
        })
    })

    const getUserMessages = expressAsyncHandler(async(req: Request, res: Response) => {
        const { chatId } = req.params;
        const messages = await getMessages(chatId, messageRepository);

        res.json({
            status: 'Message fetch success',
            messages
        })
    })

    return {
        createNewMessage,
        getUserMessages
    }
}

export default messageController;