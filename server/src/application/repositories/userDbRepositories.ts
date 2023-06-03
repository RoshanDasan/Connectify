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
        getAllUsers

    };
};

export type UserDbInterface = typeof userDbRepository;