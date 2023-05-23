"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepositoryMongoDB = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const userRepositoryMongoDB = () => {
    const addUser = async (user) => {
        console.log(user, '34');
        const newUser = new userModel_1.default(user);
        console.log(newUser, ']]]]');
        return await newUser.save();
    };
    const getUserByEmail = async (email) => {
        const user = await userModel_1.default.findOne({ email });
        return user;
    };
    const getUserByUserName = async (userName) => {
        const user = await userModel_1.default.findOne({ userName });
        console.log('findd', user);
        return user;
    };
    const getUserById = async (id) => {
        const user = await userModel_1.default.findOne({ _id: id });
        return user;
    };
    return {
        addUser,
        getUserByEmail,
        getUserByUserName,
        getUserById
    };
};
exports.userRepositoryMongoDB = userRepositoryMongoDB;
