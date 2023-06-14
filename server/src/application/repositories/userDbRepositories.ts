import { userRepositoryMongoDB } from "../../framework/database/Mongodb/repositories/userRepositories";


export const userDbRepository = (repository: ReturnType<userRepositoryMongoDB>) => {
    const addUser =async (user:{
        name: string;
        userName: string;
        email: string;
        number?: number;
        password?: string;
    }) => {
        
        return await repository.addUser(user);
    };

    const getAllUsers = async () => {
        return await repository.getAllUsers()

    }

    const getUserByEmail = async (email: string) => {
        return await repository.getUserByEmail(email);
    };
    
    const getUserByUserName = async (userName: string) => {
        
       return await repository.getUserByUserName(userName);
    };

    const getUserById = async (id: string) => {
        return await repository.getUserById(id);
    };

    const getFollowers = async (id: string) => {
        return await repository.getFollowers(id);
    };

    const getFollowings = async (id: string) => {
        return await repository.getFollowings(id);
    };

    const findFriend = async (id: string, friendId: string) => {
        return await repository.findFriend(id, friendId);
    }

    const unfollowFriend = async (id: string, friendId: string) => {
        return await repository.unfollowFriend(id, friendId)
    }

    const followFriend = async (id: string, friendId: string) => {
        return await repository.followFriend(id, friendId)
    }

    const searchUser = async (prefix: string) => {
        return await repository.searchUser(prefix);
    }
    const updateProfile = async (id: string, body: any) => {
        return await repository.updateProfile(id, body)
    }
    const blockUser = async (id: string) => {
        return await repository.blockUser(id);
    }
    const unBlockUser = async (id: string) => {
        return await repository.unBlockUser(id);
    }

    const blockUserByUser = async (userId: string, blockId: string) => {
        return await repository.blockUserByUser(userId, blockId);
    }

    const unBlockUserByUser = async (userId: string, blockId: string) => {
        return await repository.unBlockUserByUser(userId, blockId);
    }



    return {
        addUser,
        getUserByEmail,
        getUserByUserName,
        getUserById,
        getFollowers,
        getFollowings,
        findFriend,
        unfollowFriend,
        followFriend,
        getAllUsers,
        searchUser,
        updateProfile,
        blockUser,
        unBlockUser,
        blockUserByUser,
        unBlockUserByUser
        

    };
};

export type UserDbInterface = typeof userDbRepository;