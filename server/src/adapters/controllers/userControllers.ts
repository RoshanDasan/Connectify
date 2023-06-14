import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { UserDbInterface } from '../../application/repositories/userDbRepositories';
import { userById, followers, followings, addFollowers, getUserDetails, searchUserByPrefix, updateProfileInfo, userBlock } from '../../application/useCases/user/user';
import { userRepositoryMongoDB } from '../../framework/database/Mongodb/repositories/userRepositories';

const userControllers = (
    userDbRepository: UserDbInterface,
    userDbRepositoryService: userRepositoryMongoDB
) => {
    const  dbRepositoryUser = userDbRepository(userDbRepositoryService());


    // get all users list
    const getAllUsers = asyncHandler(async(req: Request, res: Response) => {
        const { id } = req.params;
        const users = await getUserDetails(id, dbRepositoryUser);
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

    // search user 
    const searchUser = asyncHandler(async(req: Request, res: Response) => {
        
        const { prefix } = req.params
        
        const users: any = await searchUserByPrefix(prefix, dbRepositoryUser);
        res.json({
            status: 'searched success',
            users
        })
    })

    // update profile informations
    const updateProfile = asyncHandler(async(req: Request, res: Response) => {
        const { id } = req.params;
        const { bio, gender, city, date, file } = req.body;
        const image: any = req?.file?.filename;
        console.log(req.body);
        

        const updateResult = await updateProfileInfo(id, {file, bio, gender, city, date }, dbRepositoryUser );
        res.json({
            status: 'Update success',
            data: updateResult
        })
    })

    // block user by user
    const blockUser = asyncHandler(async(req: Request, res: Response) => {
        const { userId, blockId } = req.params;
        const blockResult = await userBlock(userId, blockId, dbRepositoryUser);
        res.json({
            status: blockResult
        });
    }) 

    return {
        getUserById,
        getFollowersList,
        getFollowingsList,
        insertFollowers,
        getAllUsers,
        searchUser,
        updateProfile,
        blockUser
    };
};

export default userControllers;