"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_1 = require("../../application/useCases/user/user");
const userControllers = (userDbRepository, userDbRepositoryService) => {
    const dbRepositoryUser = userDbRepository(userDbRepositoryService());
    const getUserById = (0, express_async_handler_1.default)(async (req, res) => {
        const { id } = req.params;
        const user = await (0, user_1.userById)(id, dbRepositoryUser);
        res.json({
            status: "success",
            user
        });
    });
    return {
        getUserById
    };
};
exports.default = userControllers;
