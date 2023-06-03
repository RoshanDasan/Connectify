"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDbRepository = void 0;
const userDbRepository = (repository) => {
    const addUser = async (user) => {
        return await repository.addUser(user);
    };
    const getUserByEmail = async (email) => {
        return await repository.getUserByEmail(email);
    };
    const getUserByUserName = async (userName) => {
        return await repository.getUserByUserName(userName);
    };
    const getUserById = async (id) => {
        return await repository.getUserById(id);
    };
    const getFollowers = async (id) => {
        return await repository.getFollowers(id);
    };
    const getFollowings = async (id) => {
        return await repository.getFollowings(id);
    };
    const findFriend = async (id, friendId) => {
        return await repository.findFriend(id, friendId);
    };
    const unfollowFriend = async (id, friendId) => {
        return await repository.unfollowFriend(id, friendId);
    };
    const followFriend = async (id, friendId) => {
        return await repository.followFriend(id, friendId);
    };
    return {
        addUser,
        getUserByEmail,
        getUserByUserName,
        getUserById,
        getFollowers,
        getFollowings,
        findFriend,
        unfollowFriend,
        followFriend
    };
};
exports.userDbRepository = userDbRepository;
