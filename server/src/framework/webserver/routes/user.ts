import express from 'express';
import userControllers from '../../../adapters/controllers/userControllers';
import { userDbRepository } from '../../../application/repositories/userDbRepositories';
import { userRepositoryMongoDB } from '../../database/Mongodb/repositories/userRepositories';

const userRouter = () => {
    const router = express.Router();
    const controllers = userControllers(userDbRepository,userRepositoryMongoDB);

    router.get('/:id', controllers.getUserById);

    return router;
}

export default userRouter;