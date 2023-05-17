import express from 'express';
import authControllers from '../../../adapters/controllers/authControllers';
import { userDbRepository } from '../../../application/repositories/userDbRepositories';
import { authServiceInterface } from '../../../application/services/authServiceInterface';
import { userRepositoryMongoDB } from '../../database/Mongodb/repositories/userRepositories';
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


    return router

}


export default authRouter;