"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDbRepository = void 0;
const userDbRepository = (repository) => {
    const addUser = async (user) => {
        return await repository.addUser(user);
    };
    const getAllUsers = async () => {
        return await repository.getAllUsers();
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
    const sendRequest = async (id, userName, friendName, dp, friendDp, friendId) => {
        return await repository.sendRequest(id, userName, friendName, dp, friendDp, friendId);
    };
    const cancelRequest = async (id, friendId) => {
        return await repository.cancelRequest(id, friendId);
    };
    const unfollowFriend = async (id, friendId) => {
        return await repository.unfollowFriend(id, friendId);
    };
    const followFriend = async (id, friendId) => {
        return await repository.followFriend(id, friendId);
    };
    const searchUser = async (prefix, type) => {
        return await repository.searchUser(prefix, type);
    };
    const updateProfile = async (id, body) => {
        return await repository.updateProfile(id, body);
    };
    const blockUser = async (id) => {
        return await repository.blockUser(id);
    };
    const unBlockUser = async (id) => {
        return await repository.unBlockUser(id);
    };
    const blockUserByUser = async (userId, blockId) => {
        return await repository.blockUserByUser(userId, blockId);
    };
    const unBlockUserByUser = async (userId, blockId) => {
        return await repository.unBlockUserByUser(userId, blockId);
    };
    return {
        addUser,
        getUserByEmail,
        getUserByUserName,
        getUserById,
        getFollowers,
        getFollowings,
        sendRequest,
        cancelRequest,
        findFriend,
        unfollowFriend,
        followFriend,
        getAllUsers,
        searchUser,
        updateProfile,
        blockUser,
        unBlockUser,
        blockUserByUser,
        unBlockUserByUser
    };
};
exports.userDbRepository = userDbRepository;
