import express from 'express';
import authControllers from '../../../adapters/controllers/authControllers';
import { userDbRepository } from '../../../application/repositories/userDbRepositories';
import { userRepositoryMongoDB } from '../../database/Mongodb/repositories/userRepositories';
import { authServiceInterface } from '../../../application/services/authServiceInterface';
import { authServices } from '../../services/authServices';

const authRouter = () => {
    const router = express.Router();
    const controllers = authControllers(
        authServiceInterface,
        authServices,
        userDbRepository,
        userRepositoryMongoDB
    );

    router.post('/register', controllers.registerUser);

    router.post('/login', controllers.loginUser);

    router.post('/google_auth', controllers.googleAuth)

    router.patch('/user/block/:id', controllers.blockUser)

    return router

}


export default authRouter;