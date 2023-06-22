"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userBlock = exports.updateProfileInfo = exports.searchUserByPrefix = exports.addFollowers = exports.requestFriend = exports.followings = exports.followers = exports.userById = exports.getUserDetails = void 0;
const httpstatuscodes_1 = require("../../../types/httpstatuscodes");
const appError_1 = __importDefault(require("../../../utilities/appError"));
const getUserDetails = async (id, repository) => {
    // Get all users
    const users = await repository.getAllUsers();
    if (id !== 'undefined') {
        // Get blocked users
        const { blockedUsers } = await repository.getUserById(id);
        // Filter out blocked users
        const filtered = users.filter((user) => !blockedUsers.includes(user._id));
        return filtered;
    }
    else {
        return users;
    }
};
exports.getUserDetails = getUserDetails;
const userById = async (id, repository) => {
    const user = await repository.getUserById(id);
    if (!user) {
        throw new appError_1.default("user not exist", httpstatuscodes_1.HttpStatus.UNAUTHORIZED);
    }
    return user;
};
exports.userById = userById;
const followers = async (id, repository) => {
    const followers = await repository.getFollowers(id);
    return followers;
};
exports.followers = followers;
const followings = async (id, repository) => {
    const followings = await repository.getFollowings(id);
    return followings;
};
exports.followings = followings;
const requestFriend = async (id, friendId, repository) => {
    const { userName } = await repository.getUserById(id);
    const { requests } = await repository.getUserById(friendId);
    // check user is already in request list
    const isRequested = requests.find((request) => request.id === id);
    if (isRequested) {
        await repository.cancelRequest(id, friendId);
        return 'Request canceled';
    }
    else {
        await repository.sendRequest(id, userName, friendId);
        return 'Request sended';
    }
};
exports.requestFriend = requestFriend;
const addFollowers = async (id, friendId, repository) => {
    // find user already a friend or not
    const isFriend = await repository.findFriend(id, friendId);
    if (isFriend) {
        // this friend is already a follower
        const friend = await repository.unfollowFriend(id, friendId);
        return {
            status: 'unfollow',
            friend
        };
    }
    else {
        const friend = await repository.followFriend(id, friendId);
        return {
            status: 'follow',
            friend
        };
    }
};
exports.addFollowers = addFollowers;
const searchUserByPrefix = async (prefix, type, repository) => {
    if (!prefix)
        return httpstatuscodes_1.HttpStatus.NOT_FOUND;
    const searchedUsers = await repository.searchUser(prefix, type);
    return searchedUsers;
};
exports.searchUserByPrefix = searchUserByPrefix;
const updateProfileInfo = async (id, body, repository) => {
    if (!body || !id)
        return httpstatuscodes_1.HttpStatus.NOT_FOUND;
    const updateProfile = await repository.updateProfile(id, body);
    return updateProfile;
};
exports.updateProfileInfo = updateProfileInfo;
const userBlock = async (userId, blockId, repository) => {
    const { blockingUsers } = await repository.getUserById(userId);
    // check user is already blocked
    const isBlocked = blockingUsers.some((user) => user === blockId);
    if (isBlocked) {
        // user already blocked
        const updateResult = await repository.unBlockUserByUser(userId, blockId);
        return updateResult;
    }
    else {
        // user not blocked
        const updateResult = await repository.blockUserByUser(userId, blockId);
        return updateResult;
    }
};
exports.userBlock = userBlock;
