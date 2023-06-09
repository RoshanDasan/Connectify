import express, { Application } from "express";
import morgan from "morgan";
import CORS from 'cors';
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";


const expressConfig = (app: Application) => {

    const corsEnable = {
        origin: "*",
        exposeHeaders: ['Cross-Origin-Opener-Policy', 'Cross-Origin-Resourse-Policy']
    };

    // express middlewares configuration 
    app.use(CORS(corsEnable));
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(CORS(corsEnable));
    app.use(express.urlencoded({ extended: true }))


}

export default expressConfig;