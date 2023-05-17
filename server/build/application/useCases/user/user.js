"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userById = void 0;
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
