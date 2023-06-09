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
    const getAllUsers = async () => {
        const users = await userModel_1.default.find();
        // const users: any = await User.find({ _id: { $ne: '646fa8515333e77cdec159c2' }, followers: { $nin: ['6471800e2ed680381cbae276', '6477705ef858f715f868093a'] } });
        return users;
    };
    const getUserByEmail = async (email) => {
        const user = await userModel_1.default.findOne({ email }).select('-password');
        return user;
    };
    const getUserByUserName = async (userName) => {
        const user = await userModel_1.default.findOne({ userName });
        return user;
    };
    const getUserById = async (id) => {
        try {
            const user = await userModel_1.default.findOne({ _id: id }).select('-password');
            return user;
        }
        catch (error) {
            throw error;
        }
    };
    const getFollowers = async (_id) => {
        const user = await userModel_1.default.findOne({ _id });
        const followers = await Promise.all(user.followers.map(async (follower) => {
            return await userModel_1.default.findOne({ _id: follower });
        }));
        return followers;
    };
    const getFollowings = async (_id) => {
        const user = await userModel_1.default.findOne({ _id });
        const followings = await Promise.all(user.following.map(async (following) => {
            return await userModel_1.default.findOne({ _id: following });
        }));
        return followings;
    };
    const findFriend = async (_id, friendId) => {
        const user = await userModel_1.default.findOne({ _id });
        const isUserExist = await user.followers.find((user) => user === friendId);
        return isUserExist;
    };
    const sendRequest = async (id, userName, friendName, dp, friendDp, friendId) => {
        await userModel_1.default.updateOne({ _id: friendId }, {
            $push: { requests: { id, userName, dp } }
        });
        await userModel_1.default.updateOne({ _id: id }, {
            $push: { requested: { id: friendId, userName: friendName, dp: friendDp } }
        });
        return;
    };
    const cancelRequest = async (id, friendId) => {
        await userModel_1.default.updateOne({ _id: friendId }, {
            $pull: { requests: { id } }
        });
        await userModel_1.default.updateOne({ _id: id }, {
            $pull: { requested: { id: friendId } }
        });
        return;
    };
    const unfollowFriend = async (_id, friendId) => {
        // remove friend from user follower list
        await userModel_1.default.findByIdAndUpdate({ _id }, { $pull: { followers: friendId } });
        await userModel_1.default.findByIdAndUpdate({ _id: friendId }, { $pull: { following: _id } });
        const friendDetails = await userModel_1.default.findOne({ _id: friendId });
        return friendDetails;
    };
    const followFriend = async (_id, friendId) => {
        // add friend to user follower list
        await userModel_1.default.findByIdAndUpdate({ _id }, { $push: { followers: friendId } });
        await userModel_1.default.findByIdAndUpdate({ _id: friendId }, { $push: { following: _id } });
        const friendDetails = await userModel_1.default.findOne({ _id: friendId });
        return friendDetails;
    };
    const searchUser = async (prefix, type) => {
        if (type === 'userName') {
            const regex = new RegExp(`^${prefix}`, 'i');
            const users = await userModel_1.default.find({ userName: regex });
            return users;
        }
        else if (type === 'gender') {
            const regex = new RegExp(`^${prefix}`, 'i');
            const users = await userModel_1.default.find({ gender: regex });
            return users;
        }
        else {
            const regex = new RegExp(`^${prefix}`, 'i');
            const users = await userModel_1.default.find({ city: regex });
            return users;
        }
    };
    const updateProfile = async (_id, data) => {
        const { userName, file, bio, gender, city } = data;
        const updateResult = await userModel_1.default.findByIdAndUpdate(_id, {
            $set: {
                userName,
                dp: file,
                bio,
                gender,
                city,
            }
        }, { new: true });
        return updateResult;
    };
    const blockUser = async (_id) => {
        await userModel_1.default.findByIdAndUpdate({ _id }, {
            $set: { isBlock: true }
        });
        return 'Blocked';
    };
    const unBlockUser = async (_id) => {
        await userModel_1.default.findByIdAndUpdate({ _id }, {
            $set: { isBlock: false }
        });
        return 'UnBlocked';
    };
    const blockUserByUser = async (blockingUser, blockedUser) => {
        await userModel_1.default.findByIdAndUpdate({ _id: blockedUser }, {
            $push: { blockedUsers: blockingUser }
        });
        await userModel_1.default.findByIdAndUpdate({ _id: blockingUser }, {
            $push: { blockingUsers: blockedUser }
        });
        return 'Blocked';
    };
    const unBlockUserByUser = async (blockingUser, blockedUser) => {
        await userModel_1.default.findByIdAndUpdate({ _id: blockedUser }, {
            $pull: { blockedUsers: blockingUser }
        });
        await userModel_1.default.findByIdAndUpdate({ _id: blockingUser }, {
            $pull: { blockingUsers: blockedUser }
        });
        return 'Unblocked';
    };
    return {
        addUser,
        getUserByEmail,
        getUserByUserName,
        getUserById,
        getFollowers,
        getFollowings,
        findFriend,
        sendRequest,
        cancelRequest,
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
exports.userRepositoryMongoDB = userRepositoryMongoDB;
