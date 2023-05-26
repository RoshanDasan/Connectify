"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServiceInterface = void 0;
const authServiceInterface = (service) => {
    const encryptPassword = async (password) => {
        return await service.encryptPassword(password);
    };
    const comparePassword = async (password, hashedPassword) => {
        return await service.comparePassword(password, hashedPassword);
    };
    const verifyPassword = async (token) => {
        return service.verifyToken(token);
    };
    const generateToken = async (payload) => {
        return service.generateToken(payload);
    };
    return {
        encryptPassword,
        comparePassword,
        verifyPassword,
        generateToken
    };
};
exports.authServiceInterface = authServiceInterface;
