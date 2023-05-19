import { AuthServiceReturn } from "../../framework/services/authServices";

export const authServiceInterface = (service: AuthServiceReturn) => {
    const encryptPassword = async (password: string) => {
        
        return await service.encryptPassword(password);
    };
    const comparePassword = async (password: string, hashedPassword: string) => {
        return await service.comparePassword(password, hashedPassword);
    };
    const verifyPassword = async (token: string) => {
        return await service.verifyToken(token);
    };
    const generateToken = async (payload: string) => {
        return await service.generateToken(payload);
    };

    return {
        encryptPassword,
        comparePassword,
        verifyPassword,
        generateToken
    }

}

export type AuthServiceInterface = typeof authServiceInterface;
