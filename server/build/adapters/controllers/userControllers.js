"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_1 = require("../../application/useCases/user/user");
const userControllers = (userDbRepository, userDbRepositoryService) => {
    const dbRepositoryUser = userDbRepository(userDbRepositoryService());
    // get all users list
    const getAllUsers = (0, express_async_handler_1.default)(async (req, res) => {
        const users = await (0, user_1.getUserDetails)(dbRepositoryUser);
        res.json({
            status: 'Get users success',
            users
        });
    });
    // get a user details by id
    const getUserById = (0, express_async_handler_1.default)(async (req, res) => {
        const { id } = req.params;
        const user = await (0, user_1.userById)(id, dbRepositoryUser);
        res.json({
            status: "success",
            user
        });
    });
    // get followers list of the user
    const getFollowersList = (0, express_async_handler_1.default)(async (req, res) => {
        const { id } = req.params;
        const followersList = await (0, user_1.followers)(id, dbRepositoryUser);
        res.json({
            status: 'get followers success',
            followers: followersList
        });
    });
    // get following list of the user
    const getFollowingsList = (0, express_async_handler_1.default)(async (req, res) => {
        const { id } = req.params;
        const followingList = await (0, user_1.followings)(id, dbRepositoryUser);
        res.json({
            status: 'get following success',
            followings: followingList
        });
    });
    // insert followers to user
    const insertFollowers = (0, express_async_handler_1.default)(async (req, res) => {
        const { id, friendId } = req.query;
        const { status, friend } = await (0, user_1.addFollowers)(id, friendId, dbRepositoryUser);
        res.json({
            status,
            friend
        });
    });
    // search user 
    const searchUser = (0, express_async_handler_1.default)(async (req, res) => {
        const { prefix } = req.params;
        const users = await (0, user_1.searchUserByPrefix)(prefix, dbRepositoryUser);
        res.json({
            status: 'searched success',
            users
        });
    });
    // update profile informations
    const updateProfile = (0, express_async_handler_1.default)(async (req, res) => {
        const { id } = req.params;
        const { bio, gender, city, date } = req.body;
        const image = req?.file?.filename;
        console.log(req.body);
        const updateResult = await (0, user_1.updateProfileInfo)(id, { image, bio, gender, city, date }, dbRepositoryUser);
        res.json({
            status: 'Update success',
            data: updateResult
        });
    });
    return {
        getUserById,
        getFollowersList,
        getFollowingsList,
        insertFollowers,
        getAllUsers,
        searchUser,
        updateProfile
    };
};
exports.default = userControllers;
