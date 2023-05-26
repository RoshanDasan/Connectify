// correct
import { adminRepositoryMongoDB } from "../../framework/database/Mongodb/repositories/adminRepositories";

export const adminDbRepository = (repository: ReturnType<adminRepositoryMongoDB>) => {

    const getAdminByEmail = async (email: string) => {
        return await repository.getAdminByEmail(email)
    };


    return {

        getAdminByEmail,
    }

};


export type AdminDbInterface = typeof adminDbRepository;