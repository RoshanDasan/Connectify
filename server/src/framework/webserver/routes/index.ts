import {Application} from 'express';
import authRouter from './auth';
import userRouter from './user';
import postRouter from './post';
import adminauthRouter from './adminAuth';
import chatRouter from './chat';
import messageRouter from './message';
import userAuthMiddleware from '../middlewares/authMiddleware'

const routes = (app: Application) => {
    app.use('/api/auth',userAuthMiddleware, authRouter());
    app.use('/api/admin', userAuthMiddleware,adminauthRouter())
    app.use('/api/user', userAuthMiddleware, userRouter());
    app.use('/api/post', userAuthMiddleware, postRouter())
    app.use('/api/chat', userAuthMiddleware, chatRouter())
    app.use('/api/message', userAuthMiddleware, messageRouter())
}

export default routes;