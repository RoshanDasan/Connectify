import { log } from "console";
import { userRepositoryMongoDB } from "../../framework/database/Mongodb/repositories/userRepositories";


export const userDbRepository = (repository: ReturnType<userRepositoryMongoDB>) => {
    const addUser =async (user:{
        name: string;
        userName: string;
        email: string;
        number: number;
        password: string;
    }) => {
        console.log(user,'-65');
        
        return await repository.addUser(user);
    };

    const getUserByEmail = async (email: string) => {
        return await repository.getUserByEmail(email);
    };
    const getUserByUserName = async (userName: string) => {
        console.log(userName);
        
       return await repository.getUserByUserName(userName);
    };
    const getUserById = async (id: string) => {
        return await repository.getUserById(id);
    }

    return {
        addUser,
        getUserByEmail,
        getUserByUserName,
        getUserById
    };
};

export type UserDbInterface = typeof userDbRepository;