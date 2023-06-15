"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = __importDefault(require("../../config"));
const expressConfig = (app) => {
    const corsEnable = {
        origin: config_1.default.CLIENT_URL,
        exposeHeaders: ['Cross-Origin-Opener-Policy', 'Cross-Origin-Resourse-Policy']
    };
    // express middlewares configuration 
    app.use((0, cors_1.default)(corsEnable));
    app.use((0, morgan_1.default)('dev'));
    app.use(express_1.default.json());
    app.use((0, cookie_parser_1.default)());
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.urlencoded({ extended: true }));
};
exports.default = expressConfig;
