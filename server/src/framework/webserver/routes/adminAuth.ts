import express from 'express';
import authControllers from '../../../adapters/controllers/adminAuthController';
import { adminDbRepository } from '../../../application/repositories/adminDbRepositories';
import { adminRepositoryMongoDB } from '../../database/Mongodb/repositories/adminRepositories';
import { authServiceInterface } from '../../../application/services/authServiceInterface';
import { authServices } from '../../services/authServices';

const adminauthRouter = () => {
    const router = express.Router();
    const controllers = authControllers(
        authServiceInterface,
        authServices,
        adminDbRepository,
        adminRepositoryMongoDB  
    );


    router.post('/login', controllers.loginAdmin);



    return router

}


export default adminauthRouter;