"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const connection_1 = __importDefault(require("./framework/database/Mongodb/connection/connection"));
const server_1 = __importDefault(require("./framework/webserver/server"));
const express_2 = __importDefault(require("./framework/webserver/express"));
const routes_1 = __importDefault(require("./framework/webserver/routes"));
const errorHandler_1 = __importDefault(require("./framework/webserver/middlewares/errorHandler"));
const appError_1 = __importDefault(require("./utilities/appError"));
const httpstatuscodes_1 = require("./types/httpstatuscodes");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
// mongoDB connection
(0, connection_1.default)();
// middleware configuration
(0, express_2.default)(app);
(0, routes_1.default)(app);
// adding public folder as static file
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '../public/uploads')));
app.use(errorHandler_1.default);
// catch error
app.all("*", (req, res, next) => {
    next(new appError_1.default('Not found', httpstatuscodes_1.HttpStatus.UNAUTHORIZED));
});
(0, server_1.default)(server).startServer();
