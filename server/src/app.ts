import express,{ Request, Response, Application, NextFunction } from 'express';
import http from 'http';
import connectDB from './framework/database/Mongodb/connection/connection';
import serverConfig from './framework/webserver/server';
import expressConfig from './framework/webserver/express';
import router from './framework/webserver/routes'
import errorHandler from './framework/webserver/middlewares/errorHandler';
import AppError from './utilities/appError';
import { HttpStatus } from './types/httpstatuscodes'
import path from 'path';
import { Server } from 'socket.io';
import socketConfig from './framework/websocket/websocket';
import configKeys from './config';

const app: Application = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: configKeys.CLIENT_URL,
        methods: ["GET", "POST"]
    }
})

// connect socket.io
socketConfig(io);

// mongoDB connection
connectDB();

// middleware configuration
expressConfig(app);

router(app);

// adding public folder as static file
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

app.use(errorHandler);

// catch error
app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new AppError('Not found', HttpStatus.UNAUTHORIZED));
});

serverConfig(server).startServer()