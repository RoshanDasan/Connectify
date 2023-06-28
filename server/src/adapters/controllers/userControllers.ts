import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { UserDbInterface } from '../../application/repositories/userDbRepositories';
import { userById, followers, followings, unfollow, getUserDetails, searchUserByPrefix, updateProfileInfo, userBlock, requestFriend, requestFriendResponse } from '../../application/useCases/user/user';
import { userRepositoryMongoDB } from '../../framework/database/Mongodb/repositories/userRepositories';

const userControllers = (
    userDbRepository: UserDbInterface,
    userDbRepositoryService: userRepositoryMongoDB
) => {
    const dbRepositoryUser = userDbRepository(userDbRepositoryService());


    // get all users list
    const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
        const { id } = req.params;
        const users = await getUserDetails(id, dbRepositoryUser);
        res.json({
            status: 'Get users success',
            users
        })
    })

    // get a user details by id
    const getUserById = asyncHandler(async (req: Request, res: Response) => {
        const { id } = req.params;

        const user = await userById(id, dbRepositoryUser)
        res.json({
            status: "success",
            user
        });
    });

    // get followers list of the user
    const getFollowersList = asyncHandler(async (req: Request, res: Response) => {
        const { id } = req.params;
        const followersList: any = await followers(id, dbRepositoryUser);
        res.json({
            status: 'get followers success',
            followers: followersList
        })

    })

    // get following list of the user
    const getFollowingsList = asyncHandler(async (req: Request, res: Response) => {
        const { id } = req.params;
        const followingList: any = await followings(id, dbRepositoryUser);
        res.json({
            status: 'get following success',
            followings: followingList
        })
    })


    // send friend request to user
    const sendRequest = asyncHandler(async (req: Request, res: Response) => {
        const { id, friendId } = req.params;
        const response = await requestFriend(id, friendId, dbRepositoryUser);
        res.json({
            status: response
        })
    })

    // accept or reject request
    const responseFriendRequest = asyncHandler(async (req: Request, res: Response) => {
        const { id, friendId } = req.params;
        const { response } = req.body;
        const status = await requestFriendResponse(id, friendId, response, dbRepositoryUser)
        res.json({
            status
        })
    })

    // insert followers to user
    const unfollowUser = asyncHandler(async (req: Request, res: Response) => {
        const { id, friendId } = req.query;
        const { status, friend }: any = await unfollow(id, friendId, dbRepositoryUser);
        res.json({
            status,
            friend
        })
    })

    // search user 
    const searchUser = asyncHandler(async (req: Request, res: Response) => {

        const { prefix } = req.params;
        const { type } = req.query;
        console.log(type, 'par');


        const users: any = await searchUserByPrefix(prefix, type, dbRepositoryUser);
        res.json({
            status: 'searched success',
            users
        })
    })

    // update profile informations
    const updateProfile = asyncHandler(async (req: Request, res: Response) => {
        const { id } = req.params;
        const { userName, bio, gender, city, file } = req.body;

        const updateResult = await updateProfileInfo(id, { userName, file, bio, gender, city }, dbRepositoryUser);
        res.json({
            status: 'Update success',
            data: updateResult
        })
    })

    // block user by user
    const blockUser = asyncHandler(async (req: Request, res: Response) => {
        const { userId, blockId } = req.params;
        const blockResult = await userBlock(userId, blockId, dbRepositoryUser);
        res.json({
            status: blockResult
        });
    })

    return {
        getUserById,
        sendRequest,
        responseFriendRequest,
        getFollowersList,
        getFollowingsList,
        unfollowUser,
        getAllUsers,
        searchUser,
        updateProfile,
        blockUser
    };
};

export default userControllers;