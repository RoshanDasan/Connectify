import Message from "../models/MessageModal";

export const messageRepositoryMongoDB = () => {

    // create a message with a person based on their chatId
    const createMessage = async (chatId: string, senderId: string, message: any) => {
        const newMessage =  new Message({
            chatId,
            senderId,
            message
        });
        return await newMessage.save();
    }

    // get single person messages
    const getMessages = async (chatId: string) => {
        return await Message.find({chatId});
    }

    return {
        createMessage,
        getMessages
    }

}

export type messageRepositoryMongoDBType = typeof messageRepositoryMongoDB;

