import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { AuthServices } from '../../framework/services/authServices';
import { AuthServiceInterface } from '../../application/services/authServiceInterface';
import { UserDbInterface } from '../../application/repositories/userDbRepositories';
import { userRepositoryMongoDB } from '../../framework/database/Mongodb/repositories/userRepositories';
import { userRegister, userLogin, googleAuthLogin, userBlock} from '../../application/useCases/auth/userAuth';

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
    
    res.json({
        status:"success",
        message: "User registered",
        token
    });
    });
    const loginUser = asyncHandler(async(req: Request, res: Response) => {
        
        const { userName, password } : { userName: string; password: string} = req.body;
        const token = await userLogin(userName, password, dbUserRepository, authServices);
        // res.setHeader('authorization', token.token);
        res.json({
            status: "success",
            message: "user verified",
            token
        });
    });

    const googleAuth = asyncHandler(async(req: Request, res: Response) => {
        console.log('-----------------------');
        const { fullName, firstName, email } = req.body;
        const userData: any = { name:fullName, userName:firstName, number: 7594837203, email }
        console.log(userData);

        
        const {user, token} = await googleAuthLogin(userData, dbUserRepository, authServices)

        res.json({
            status:'Google login success',
            user,
            token
        })
    })

    const blockUser = asyncHandler(async(req: Request, res: Response) => {
        const { id } = req.params;
        const blockResult = await userBlock(id, dbUserRepository);
        res.json({
            status: `${blockResult} success`
        })
    })

    return {
        registerUser,
        loginUser,
        googleAuth,
        blockUser
    };
};

export default authControllers;