import {Application} from 'express';
import authRouter from './auth';
import userRouter from './user';
import postRouter from './post';
import userAuthMiddleware from '../middlewares/authMiddleware'

const routes = (app: Application) => {
    app.use('/api/auth', authRouter());
    app.use('/api/user',userAuthMiddleware, userRouter());
    app.use('/api/post',userAuthMiddleware, postRouter())
}

export default routes;