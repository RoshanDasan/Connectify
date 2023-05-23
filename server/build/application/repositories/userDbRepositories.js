"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDbRepository = void 0;
const userDbRepository = (repository) => {
    const addUser = async (user) => {
        console.log(user, '-65');
        return await repository.addUser(user);
    };
    const getUserByEmail = async (email) => {
        return await repository.getUserByEmail(email);
    };
    const getUserByUserName = async (userName) => {
        console.log(userName);
        return await repository.getUserByUserName(userName);
    };
    const getUserById = async (id) => {
        return await repository.getUserById(id);
    };
    return {
        addUser,
        getUserByEmail,
        getUserByUserName,
        getUserById
    };
};
exports.userDbRepository = userDbRepository;
