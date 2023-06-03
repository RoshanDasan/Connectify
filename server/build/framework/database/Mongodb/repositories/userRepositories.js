"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepositoryMongoDB = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const userRepositoryMongoDB = () => {
    const addUser = async (user) => {
        const newUser = new userModel_1.default(user);
        return await newUser.save();
    };
    const getUserByEmail = async (email) => {
        const user = await userModel_1.default.findOne({ email });
        return user;
    };
    const getUserByUserName = async (userName) => {
        const user = await userModel_1.default.findOne({ userName });
        return user;
    };
    const getUserById = async (id) => {
        const user = await userModel_1.default.findOne({ _id: id });
        return user;
    };
    const getFollowers = async (_id) => {
        const user = await userModel_1.default.findOne({ _id });
        const followers = user.followers.map(async (follower) => {
            await userModel_1.default.findOne({ _id: follower });
        });
        return followers;
    };
    const getFollowings = async (_id) => {
        const user = await userModel_1.default.findOne({ _id });
        const followings = user.following.map(async (following) => {
            await userModel_1.default.findOne({ _id: following });
        });
        return followings;
    };
    const findFriend = async (_id, friendId) => {
        const user = userModel_1.default.findOne({ _id });
        const isUserExist = await user.following.find((user) => user === friendId);
        return isUserExist;
    };
    const unfollowFriend = async (_id, friendId) => {
        // remove friend from user follower list
        const user = await userModel_1.default.findByIdAndUpdate({ _id }, { $pull: { followers: friendId } });
        const friend = await userModel_1.default.findByIdAndUpdate({ _id: friendId }, { $pull: { following: friendId } });
        const friendDetails = await userModel_1.default.findOne({ _id: friendId });
        return friendDetails;
    };
    const followFriend = async (_id, friendId) => {
        // add friend to user follower list
        const user = await userModel_1.default.findByIdAndUpdate({ _id }, { $push: { followers: friendId } });
        const friend = await userModel_1.default.findByIdAndUpdate({ _id: friendId }, { $push: { following: friendId } });
        const friendDetails = await userModel_1.default.findOne({ _id: friendId });
        return friendDetails;
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
exports.userRepositoryMongoDB = userRepositoryMongoDB;
