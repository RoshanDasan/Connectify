//correct
import Admin from "../models/adminModel";

export const adminRepositoryMongoDB = () => {

    const getAdminByEmail = async (email: string) => {
        const user: any = await Admin.findOne({ email });
        return user
    };



    return {

        getAdminByEmail,

    };
}

export type adminRepositoryMongoDB = typeof adminRepositoryMongoDB;