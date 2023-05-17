"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const userAuth_1 = require("../../application/useCases/auth/userAuth");
// authentication controllers
const authControllers = (authServiceInterface, authService, userDbInterface, userDbservice) => {
    const dbUserRepository = userDbInterface(userDbservice());
    const authServices = authServiceInterface(authService());
    const registerUser = (0, express_async_handler_1.default)(async (req, res) => {
        const { name, userName, email, number, password } = req.body;
        const user = {
            name,
            userName,
            email,
            number,
            password,
        };
        const token = await (0, userAuth_1.userRegister)(user, dbUserRepository, authServices);
        res.json({
            status: "success",
            message: "User registered",
            token
        });
    });
    const loginUser = (0, express_async_handler_1.default)(async (req, res) => {
        const { userName, password } = req.body;
        const token = await (0, userAuth_1.userLogin)(userName, password, dbUserRepository, authServices);
        res.json({
            status: "success",
            message: "user verified",
            token
        });
    });
    return {
        registerUser,
        loginUser
    };
};
exports.default = authControllers;
