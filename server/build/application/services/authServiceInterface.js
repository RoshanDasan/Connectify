"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServiceInterface = void 0;
const authServiceInterface = (service) => {
    const encryptPassword = (password) => {
        service.encryptPassword(password);
    };
    const comparePassword = (password, hashedPassword) => {
        service.compatePassword(password, hashedPassword);
    };
    const verifyPassword = (token) => {
        service.verifyToken(token);
    };
    const generateToken = (payload) => {
        service.generateToken(payload);
    };
    return {
        encryptPassword,
        comparePassword,
        verifyPassword,
        generateToken
    };
};
exports.authServiceInterface = authServiceInterface;
