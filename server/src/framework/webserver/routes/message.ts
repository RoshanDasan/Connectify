import express from 'express';
import messageController from '../../../adapters/controllers/messageController';
import { messageRepositoryInterface } from '../../../application/repositories/messageRepository';
import { messageRepositoryMongoDB } from '../../database/Mongodb/repositories/messageRepository';

const messageRouter = () => {
    const router = express.Router();
    const controller = messageController(messageRepositoryInterface, messageRepositoryMongoDB);

    router.post('/', controller.createNewMessage);

    router.get('/:chatId', controller.getUserMessages);


    return router;
};

export default messageRouter;