"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const httpstatuscodes_1 = require("../../../types/httpstatuscodes");
const appError_1 = __importDefault(require("../../../utilities/appError"));
const authServices_1 = require("../../services/authServices");
const userAuthMiddleware = (req, res, next) => {
    let token = null;
    console.log("Entered to middleware");
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
        token = token.replace(/"/g, ""); // Remove double quotes from the token
    }
    if (!token) {
        throw new appError_1.default("Token not found", httpstatuscodes_1.HttpStatus.UNAUTHORIZED);
    }
    try {
        const { payload } = (0, authServices_1.authServices)().verifyToken(token);
        if (payload)
            next(); // Call next to proceed to the next middleware or route handler
    }
    catch (error) {
        console.log(error);
        throw new appError_1.default("Unauthorized user", httpstatuscodes_1.HttpStatus.UNAUTHORIZED);
    }
};
exports.default = userAuthMiddleware;
