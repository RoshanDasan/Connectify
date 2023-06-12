import express from 'express';
import chatController from '../../../adapters/controllers/chatController';
import { chatRepositoriesInterface } from '../../../application/repositories/chatRepositeries';
import { chatRepositoryMongoDB } from '../../database/Mongodb/repositories/chatRepositories';

const chatRouter = () => {
    const router = express.Router();
    const controllers = chatController(chatRepositoriesInterface, chatRepositoryMongoDB);

    // create new chat box between two users
    router.post('/:senderId/:recieverId', controllers.chatCreate);

    // get all chats by user
    router.get('/:userId', controllers.getChats);

    // get single chat
    router.get('/:firstId/:secondId', controllers.getSingleChat);



    return router;
}

export default chatRouter;