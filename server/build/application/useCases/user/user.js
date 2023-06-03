"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFollowers = exports.followings = exports.followers = exports.userById = void 0;
const httpstatuscodes_1 = require("../../../types/httpstatuscodes");
const appError_1 = __importDefault(require("../../../utilities/appError"));
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
