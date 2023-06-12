import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { chatRepositoriesInterfaceType } from "../../application/repositories/chatRepositeries";
import { chatRepositoryType } from "../../framework/database/Mongodb/repositories/chatRepositories";
import { createChat, getAllchats, getChat } from "../../application/useCases/chat/chat";

const chatController = (chatRepositoriesInterfaceType: chatRepositoriesInterfaceType, chatRepositoryType: chatRepositoryType) => {
    const chatRepositeries = chatRepositoriesInterfaceType(chatRepositoryType());

    const chatCreate = expressAsyncHandler(async (req: Request, res: Response) => {
        const { senderId, recieverId } = req.params;
        const newChat = await createChat(senderId, recieverId, chatRepositeries);
        res.json({
            status: 'success',
            chats: newChat
        })
    })

    const getChats = expressAsyncHandler(async (req: Request, res: Response) => {
        const { userId} = req.params;
        const chats = await getAllchats(userId, chatRepositeries);
        res.json({
            status: 'success',
            chats
            
        })
    })

    const getSingleChat = expressAsyncHandler(async(req: Request, res:Response) => {
        const { firstId, secondId } = req.params;
        const chat = await getChat(firstId, secondId, chatRepositeries);
        res.json({
            status: 'success',
            chat
        })
    })

    return {
        chatCreate,
        getChats,
        getSingleChat
    }
}

export default chatController;