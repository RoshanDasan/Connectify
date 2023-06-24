import { HttpStatus } from '../../../types/httpstatuscodes';
import AppError from '../../../utilities/appError';
import { UserDbInterface } from '../../repositories/userDbRepositories';


export const getUserDetails = async (id: string, repository: ReturnType<UserDbInterface>) => {
    // Get all users
    const users: any[] = await repository.getAllUsers();

    if (id !== 'undefined') {

        // Get blocked users
        const { blockedUsers } = await repository.getUserById(id);

        // Filter out blocked users
        const filtered = users.filter((user: any) => !blockedUsers.includes(user._id));

        return filtered;
    } else {
        return users
    }

};


export const userById = async (id: string, repository: ReturnType<UserDbInterface>) => {
    const user: any = await repository.getUserById(id)

    if (!user) {
        throw new AppError("user not exist", HttpStatus.UNAUTHORIZED);
    }
    return user;
}

export const followers = async (id: string, repository: ReturnType<UserDbInterface>) => {
    const followers: any = await repository.getFollowers(id);
    return followers;
}

export const followings = async (id: string, repository: ReturnType<UserDbInterface>) => {
    const followings: any = await repository.getFollowings(id);
    return followings
}

export const requestFriend = async (id: string, friendId: string, repository: ReturnType<UserDbInterface>) => {
    const { userName, dp } = await repository.getUserById(id);
    const { requests, userName: friendName, dp: friendDp } = await repository.getUserById(friendId);

    // check user is already in request list
    const isRequested = requests.find((request: any) => request.id === id);

    if (isRequested) {
        await repository.cancelRequest(id, friendId);
        return 'Request canceled';
    } else {
        await repository.sendRequest(id, userName, friendName, dp, friendDp, friendId);
        return 'Request sended';
    }

}

export const requestFriendResponse = async (id: string, friendId: string, { response }: any, repository: ReturnType<UserDbInterface>) => {
    if (response === 'accept') {

        await repository.followFriend(friendId, id);
        await repository.cancelRequest(friendId, id);
        return 'Request accepted'
    } else {

        await repository.cancelRequest(friendId, id);
        return 'Request rejected'
    }
}

export const unfollow = async (id: any, friendId: any, repository: ReturnType<UserDbInterface>) => {

    // this friend is already a follower
    const friend: any = await repository.unfollowFriend(id, friendId);
    return {
        status: 'unfollow',
        friend
    }

}

export const searchUserByPrefix = async (prefix: any, type: any, repository: ReturnType<UserDbInterface>) => {
    if (!prefix) return HttpStatus.NOT_FOUND

    const searchedUsers: any = await repository.searchUser(prefix, type)
    return searchedUsers
}

export const updateProfileInfo = async (id: string, body: any, repository: ReturnType<UserDbInterface>) => {
    if (!body || !id) return HttpStatus.NOT_FOUND
    const updateProfile: any = await repository.updateProfile(id, body);
    return updateProfile
}

export const userBlock = async (userId: string, blockId: string, repository: ReturnType<UserDbInterface>) => {

    const { blockingUsers } = await repository.getUserById(userId);

    // check user is already blocked
    const isBlocked = blockingUsers.some((user: any) => user === blockId);

    if (isBlocked) {
        // user already blocked
        const updateResult: any = await repository.unBlockUserByUser(userId, blockId);
        return updateResult;
    } else {
        // user not blocked
        const updateResult: any = await repository.blockUserByUser(userId, blockId);
        return updateResult;
    }
}