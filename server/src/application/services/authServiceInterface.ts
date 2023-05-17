import { AuthServiceReturn } from "../../framework/services/authServices";

export const authServiceInterface = (service: AuthServiceReturn) => {
    const encryptPassword = (password: string) => {
        service.encryptPassword(password);
    };
    const comparePassword = (password: string, hashedPassword: string) => {
        service.compatePassword(password, hashedPassword);
    };
    const verifyPassword = (token: string) => {
        service.verifyToken(token);
    };
    const generateToken = (payload: string) => {
        service.generateToken(payload);
    };

    return {
        encryptPassword,
        comparePassword,
        verifyPassword,
        generateToken
    }

}

export type AuthServiceInterface = typeof authServiceInterface;