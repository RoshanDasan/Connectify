"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleAuthLogin = exports.userLogin = exports.userRegister = void 0;
const httpstatuscodes_1 = require("../../../types/httpstatuscodes");
const appError_1 = __importDefault(require("../../../utilities/appError"));
const userRegister = async (user, userRepository, authService) => {
    // bussiness logic
    user.email = user.email.toLowerCase();
    const isEmailExist = await userRepository.getUserByEmail(user.email);
    if (isEmailExist) {
        throw new appError_1.default('Email already exist : ', httpstatuscodes_1.HttpStatus.UNAUTHORIZED);
    }
    let encryptedPassword = await authService.encryptPassword(user.password);
    user.password = encryptedPassword;
    const { _id: userId } = await userRepository.addUser(user);
    const token = authService.generateToken(userId.toString());
    return token;
};
exports.userRegister = userRegister;
const userLogin = async (userName, password, userRepository, authService) => {
    const user = await userRepository.getUserByUserName(userName);
    if (!user) {
        throw new appError_1.default("User not exist", httpstatuscodes_1.HttpStatus.UNAUTHORIZED);
    }
    const checkPassword = await authService.comparePassword(password, user.password);
    if (!checkPassword) {
        throw new appError_1.default("Password you entered was incorrect", httpstatuscodes_1.HttpStatus.UNAUTHORIZED);
    }
    const token = await authService.generateToken(user._id.toString());
    return {
        token,
        user
    };
};
exports.userLogin = userLogin;
const googleAuthLogin = async (user, userRepository, authService) => {
    const isEmailExist = await userRepository.getUserByEmail(user.email);
    if (isEmailExist) {
        const token = await authService.generateToken(isEmailExist._id.toString());
        return {
            user: isEmailExist,
            token
        };
    }
    else {
        const userDetails = await userRepository.addUser(user);
        const token = await authService.generateToken(userDetails._id.toString());
        return {
            user: userDetails,
            token
        };
    }
};
exports.googleAuthLogin = googleAuthLogin;
