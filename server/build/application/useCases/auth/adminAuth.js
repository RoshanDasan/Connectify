"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminLogin = void 0;
const httpstatuscodes_1 = require("../../../types/httpstatuscodes");
const appError_1 = __importDefault(require("../../../utilities/appError"));
const adminLogin = async (email, password, adminRepository, authService) => {
    const admin = await adminRepository.getAdminByEmail(email);
    if (!admin) {
        throw new appError_1.default("Admin not exist", httpstatuscodes_1.HttpStatus.UNAUTHORIZED);
    }
    const checkPassword = await authService.comparePassword(password, admin.password);
    if (!checkPassword) {
        throw new appError_1.default("Password you entered was incorrect", httpstatuscodes_1.HttpStatus.UNAUTHORIZED);
    }
    const token = await authService.generateToken(admin._id.toString());
    console.log(token, 'lllllll');
    return {
        token,
        admin
    };
};
exports.adminLogin = adminLogin;
