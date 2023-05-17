import exp from 'constants';
import dotenv from 'dotenv';

dotenv.config();

const configKeys = {
    MONGO_URL : process.env.MONGODB_URL as string,
    PORT : process.env.PORT ,
    JWT_SECRET: process.env.JWT_TOKEN_KEY
}

export default configKeys;