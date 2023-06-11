import Chat from "../models/Chatmodel";

export const chatRepositoryMongoDB = () => {

    // create chat collection in db
    const createChat = async (senderId: string, recieverId: string) => {
        try {
            // find the chat is already in the database
            const isChatExist = await Chat.findOne({
                members: { $all: [senderId, recieverId] }
            });

            if(isChatExist) {
                // if the chat is already in the database nothing to do
                return isChatExist;
            } else {
                // create a new chat with the sender and reciever
                const newChat = new Chat({
                    members: [senderId, recieverId]
                });

                const saveResponse = await newChat.save();
                return saveResponse;
            }
            
        } catch (error) {
            throw error
        }
}

   const getAllchat = async (userId: string) => {
    try {
        return await Chat.find({
            members: { $in: [userId]}
        })
    } catch (error) {
        throw error;
    }
   }

   const getChat = async (firstId: string, secondId: string) => {
    return await Chat.find({
        members: { $all: [firstId, secondId]}
    });
   };

    return {
        createChat,
        getAllchat,
        getChat
    }

};

export type chatRepositoryType = typeof chatRepositoryMongoDB;