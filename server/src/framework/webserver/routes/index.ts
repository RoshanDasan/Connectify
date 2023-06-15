import {Application} from 'express';
import authRouter from './auth';
import userRouter from './user';
import postRouter from './post';
import adminauthRouter from './adminAuth';
import chatRouter from './chat';
import messageRouter from './message';
import userAuthMiddleware from '../middlewares/authMiddleware'

const routes = (app: Application) => {
    app.use('/api/auth', authRouter());
    app.use('/api/admin',  adminauthRouter())
    app.use('/api/user',  userRouter());
    app.use('/api/post',  postRouter());
    app.use('/api/chat',  chatRouter());
    app.use('/api/message',  messageRouter());
}

export default routes;