import { HttpStatus } from '../../../types/httpstatuscodes';
import AppError from '../../../utilities/appError';
import { UserDbInterface } from '../../repositories/userDbRepositories';


export const getUserDetails = async (id: string, repository: ReturnType<UserDbInterface>) => {
    // Get all users
    const users: any[] = await repository.getAllUsers();
  
    // Get blocked users
    const {blockedUsers}  = await repository.getUserById(id);
  
    // Filter out blocked users
    const filtered = users.filter((user: any) => !blockedUsers.includes(user._id));
  
    return filtered;
  };
  

export const userById =async (id:string, repository: ReturnType<UserDbInterface>) => {
    const user: any = await repository.getUserById(id)

    if(!user){
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
    return followings;
}

export const addFollowers = async (id: any, friendId: any, repository: ReturnType<UserDbInterface>) => {

    // find user already a friend or not
    const isFriend: any = await repository.findFriend(id, friendId);

    if(isFriend) {
        // this friend is already a follower
        const friend: any = await repository.unfollowFriend(id, friendId)
        return {
            status: 'unfollow',
            friend
        }
    } else {
        const friend: any = await repository.followFriend(id, friendId)
        return {
            status: 'follow',
            friend
        }
    }
}

export const searchUserByPrefix = async (prefix: any, repository: ReturnType<UserDbInterface>) => {
    if(!prefix) return HttpStatus.NOT_FOUND
    const searchedUsers: any = await repository.searchUser(prefix)
    return searchedUsers
}

export const updateProfileInfo = async (id: string, body: any,  repository: ReturnType<UserDbInterface>) => {
    if(!body || !id) return HttpStatus.NOT_FOUND
    const updateProfile: any = await repository.updateProfile(id, body);
    return updateProfile
}

export const userBlock = async(userId: string, blockId: string, repository: ReturnType<UserDbInterface>) => {

    const { blockedUsers }= await repository.getUserById(userId);

    // check user is already blocked
    const isBlocked = blockedUsers.some((user: any) => user === blockId);

    if(isBlocked) {
        // user already blocked
        const updateResult: any = await repository.unBlockUserByUser(userId, blockId);
        return updateResult;
    } else {
        // user not blocked
        const updateResult: any = await repository.blockUserByUser(userId, blockId);
        return updateResult;
    }
}