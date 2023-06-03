"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const adminAuth_1 = require("../../application/useCases/auth/adminAuth");
// authentication controllers
const authControllers = (authServiceInterface, authService, adminDbInterface, adminDbservice) => {
    const dbAdminRepository = adminDbInterface(adminDbservice());
    const authServices = authServiceInterface(authService());
    const loginAdmin = (0, express_async_handler_1.default)(async (req, res) => {
        console.log('-------------------------------------------------------');
        const { email, password } = req.body;
        const token = await (0, adminAuth_1.adminLogin)(email, password, dbAdminRepository, authServices);
        // res.setHeader('authorization', token.token);
        res.json({
            status: "success",
            message: "admin verified",
            token
        });
    });
    return {
        loginAdmin,
    };
};
exports.default = authControllers;
