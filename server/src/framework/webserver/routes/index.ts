import {Application} from 'express';
import authRouter from './auth';
import userRouter from './user';

const routes = (app: Application) => {
    app.use('/api/auth', authRouter());
    app.use('/api/user', userRouter());
}

export default routes;