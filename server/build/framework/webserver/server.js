"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../config"));
const serverConfig = (server) => {
    const startServer = () => {
        server.listen(config_1.default.PORT, '0.0.0.0', () => {
            console.log(`Server started on http://localhost:${config_1.default.PORT}`);
        });
    };
    return {
        startServer,
    };
};
exports.default = serverConfig;
