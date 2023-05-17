import { userRepositoryMongoDB } from "../../framework/database/Mongodb/repositories/userRepositories";


export const userDbRepository = (repository: ReturnType<userRepositoryMongoDB>) => {
    const addUser =async (user:{
        name: string;
        userName: string;
        email: string;
        number: number;
        password: string;
    }) => {
        return await repository.addUser(user);
    };

    const getUserByEmail = async (email: string) => {
        await repository.getUserByEmail(email);
    };
    const getUserByUserName = async (userName: string) => {
        await repository.getUserByUserName(userName);
    };
    const getUserById = async (id: string) => {
        await repository.getUserById(id);
    }

    return {
        addUser,
        getUserByEmail,
        getUserByUserName,
        getUserById
    };
};

export type UserDbInterface = typeof userDbRepository;