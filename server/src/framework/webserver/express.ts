import express, { Application, NextFunction } from "express";
import morgan from "morgan";
import CORS from 'cors';
import cookieParser from "cookie-parser";


const expressConfig = (app: Application) => {
    app.use(morgan('dev'));
    app.use(CORS());
    app.use(express.json());
    app.use(cookieParser())


}

export default expressConfig