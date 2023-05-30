import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { AuthServices } from '../../framework/services/authServices';
import { AuthServiceInterface } from '../../application/services/authServiceInterface';
import { AdminDbInterface } from '../../application/repositories/adminDbRepositories';
import { adminRepositoryMongoDB } from '../../framework/database/Mongodb/repositories/adminRepositories';
import { adminLogin } from '../../application/useCases/auth/adminAuth';

// authentication controllers
const authControllers = (
    authServiceInterface: AuthServiceInterface,
    authService: AuthServices,
    adminDbInterface: AdminDbInterface,
    adminDbservice: adminRepositoryMongoDB
) => {
    const dbAdminRepository = adminDbInterface(adminDbservice());
    const authServices = authServiceInterface(authService());
   
    const loginAdmin = asyncHandler(async(req: Request, res: Response) => {
        console.log('-------------------------------------------------------');       
        
        const { email, password }  = req.body;
        const token = await adminLogin(email, password, dbAdminRepository, authServices)
        // res.setHeader('authorization', token.token);
        res.json({
            status: "success",
            message: "admin verified",
            token
        });
    });

    return {
        loginAdmin,
    };
};

export default authControllers;