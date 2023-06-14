import express from 'express';
import userControllers from '../../../adapters/controllers/userControllers';
import { userDbRepository } from '../../../application/repositories/userDbRepositories';
import { userRepositoryMongoDB } from '../../database/Mongodb/repositories/userRepositories';
import { upload } from '../../services/multerServices';

const userRouter = () => {
    const router = express.Router();

    const controllers: any = userControllers(userDbRepository,userRepositoryMongoDB);

    router.get('/all/:id', controllers.getAllUsers)

    router.get('/:id', controllers.getUserById);

    router.get('/followers/:id', controllers.getFollowersList);

    router.get('/followings/:id', controllers.getFollowingsList);

    router.patch('/', controllers.insertFollowers)

    router.get('/search/:prefix', controllers.searchUser)

    router.put('/:id',upload.single('file'), controllers.updateProfile)

    router.patch('/:userId/:blockId', controllers.blockUser);
    
    return router;
}

export default userRouter;