import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { UserDbInterface } from '../../application/repositories/userDbRepositories';
import { userById, followers, followings, addFollowers, getUserDetails } from '../../application/useCases/user/user';
import { userRepositoryMongoDB } from '../../framework/database/Mongodb/repositories/userRepositories';

const userControllers = (
    userDbRepository: UserDbInterface,
    userDbRepositoryService: userRepositoryMongoDB
) => {
    const  dbRepositoryUser = userDbRepository(userDbRepositoryService());


    // get all users list
    const getAllUsers = asyncHandler(async(req: Request, res: Response) => {
        const users = await getUserDetails(dbRepositoryUser);
        res.json({
            status: 'Get users success',
            users
        })
    })

    // get a user details by id
    const getUserById = asyncHandler(async(req:Request, res:Response) => {
        const { id } = req.params;

        const user = await userById(id, dbRepositoryUser)
        res.json({
            status: "success",
            user
        });
    }); 

    // get followers list of the user
    const getFollowersList = asyncHandler(async(req: Request, res: Response) => {
        const { id } = req.params;
        const followersList: any = await followers(id, dbRepositoryUser);
        res.json({
            status: 'get followers success',
            followers: followersList
        })

    })

    // get following list of the user
    const getFollowingsList = asyncHandler(async(req: Request, res: Response) => {
        const { id } = req.params;
        const followingList: any = await followings(id, dbRepositoryUser);
        res.json({
            status: 'get following success',
            followings: followingList
        })
    })

    // insert followers to user
    const insertFollowers = asyncHandler(async(req: Request, res: Response) => {
        const { id, friendId } = req.query;
        const {status, friend}: any = await addFollowers(id, friendId, dbRepositoryUser);
        res.json({
            status,
            friend 
        })
    })

    return {
        getUserById,
        getFollowersList,
        getFollowingsList,
        insertFollowers,
        getAllUsers
    };
};

export default userControllers;