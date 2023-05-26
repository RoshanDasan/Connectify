import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { AuthServices } from '../../framework/services/authServices';
import { AuthServiceInterface } from '../../application/services/authServiceInterface';
import { UserDbInterface } from '../../application/repositories/userDbRepositories';
import { userRepositoryMongoDB } from '../../framework/database/Mongodb/repositories/userRepositories';
import { userRegister, userLogin} from '../../application/useCases/auth/userAuth';

// authentication controllers
const authControllers = (
    authServiceInterface: AuthServiceInterface,
    authService: AuthServices,
    userDbInterface: UserDbInterface,
    userDbservice: userRepositoryMongoDB
) => {
    const dbUserRepository = userDbInterface(userDbservice());
    const authServices = authServiceInterface(authService());
    const registerUser = asyncHandler(async(req: Request, res: Response) => {
        
        const { name, userName, number,email, password } = req.body;
        const user = {
            name,
            userName,
            number,
            email,
            password,
            };
    
    const token = await userRegister(user, dbUserRepository, authServices);
    console.log(token,'tokennnn');
    
    res.json({
        status:"success",
        message: "User registered",
        token
    });
    });
    const loginUser = asyncHandler(async(req: Request, res: Response) => {
        
        const { userName, password } : { userName: string; password: string} = req.body;
        const token = await userLogin(userName, password, dbUserRepository, authServices);
        console.log(token.token,'-------------------------------------------------------');       
        res.setHeader('authorization', token.token);
        res.json({
            status: "success",
            message: "user verified",
            token
        });
    });

    return {
        registerUser,
        loginUser,
    };
};

export default authControllers;