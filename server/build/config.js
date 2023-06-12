"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinaryConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const configKeys = {
    MONGO_URL: process.env.MONGODB_URL,
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_TOKEN_KEY
};
// configuration for cloudinary
exports.cloudinaryConfig = {
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
};
exports.default = configKeys;
