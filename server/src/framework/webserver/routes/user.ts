import express from 'express';
import userControllers from '../../../adapters/controllers/userControllers';
import { userDbRepository } from '../../../application/repositories/userDbRepositories';
import { userRepositoryMongoDB } from '../../database/Mongodb/repositories/userRepositories';

const userRouter = () => {
    const router = express.Router();

    const controllers = userControllers(userDbRepository,userRepositoryMongoDB);

    router.get('/', controllers.getAllUsers)

    router.get('/:id', controllers.getUserById);

    router.get('/followers/:id', controllers.getFollowersList);

    router.get('/followings/:id', controllers.getFollowingsList);

    router.patch('/', controllers.insertFollowers)

    return router;
}

export default userRouter;