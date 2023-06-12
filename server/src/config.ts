import dotenv from 'dotenv';
import { ConfigOptions } from 'cloudinary';

dotenv.config();

const configKeys = {
    MONGO_URL : process.env.MONGODB_URL as string,
    PORT : process.env.PORT ,
    JWT_SECRET: process.env.JWT_TOKEN_KEY
}

// configuration for cloudinary
export const cloudinaryConfig: ConfigOptions = {
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
};

export default configKeys;