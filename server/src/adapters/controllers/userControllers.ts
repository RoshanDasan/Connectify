import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { UserDbInterface } from '../../application/repositories/userDbRepositories';
import { userById } from '../../application/useCases/user/user';
import { userRepositoryMongoDB } from '../../framework/database/Mongodb/repositories/userRepositories';

const userControllers = (
    userDbRepository: UserDbInterface,
    userDbRepositoryService: userRepositoryMongoDB
) => {
    const  dbRepositoryUser = userDbRepository(userDbRepositoryService());
    const getUserById = asyncHandler(async(req:Request, res:Response) => {
        const { id } = req.params;

        const user = await userById(id, dbRepositoryUser)
        res.json({
            status: "success",
            user
        });
    });

    return {
        getUserById
    };
};

export default userControllers;