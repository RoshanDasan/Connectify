"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatRepositoryMongoDB = void 0;
const Chatmodel_1 = __importDefault(require("../models/Chatmodel"));
const chatRepositoryMongoDB = () => {
    // create chat collection in db
    const createChat = async (senderId, recieverId) => {
        try {
            // find the chat is already in the database
            const isChatExist = await Chatmodel_1.default.findOne({
                members: { $all: [senderId, recieverId] }
            });
            if (isChatExist) {
                // if the chat is already in the database nothing to do
                return isChatExist;
            }
            else {
                // create a new chat with the sender and reciever
                const newChat = new Chatmodel_1.default({
                    members: [senderId, recieverId]
                });
                const saveResponse = await newChat.save();
                return saveResponse;
            }
        }
        catch (error) {
            throw error;
        }
    };
    const getAllchat = async (userId) => {
        try {
            return await Chatmodel_1.default.find({
                members: { $in: [userId] }
            });
        }
        catch (error) {
            throw error;
        }
    };
    const getChat = async (firstId, secondId) => {
        return await Chatmodel_1.default.find({
            members: { $all: [firstId, secondId] }
        });
    };
    return {
        createChat,
        getAllchat,
        getChat
    };
};
exports.chatRepositoryMongoDB = chatRepositoryMongoDB;
