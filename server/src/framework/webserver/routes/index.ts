import {Application} from 'express';
import authRouter from './auth';
import userRouter from './user';
import postRouter from './post';
import adminauthRouter from './adminAuth';
import userAuthMiddleware from '../middlewares/authMiddleware'

const routes = (app: Application) => {
    app.use('/api/auth', authRouter());
    app.use('/api/admin',adminauthRouter())
    app.use('/api/user', userRouter());
    app.use('/api/post', postRouter())
}

export default routes;