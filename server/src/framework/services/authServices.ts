import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import configKeys from '../../config';

export const authServices = () => {
    const encryptPassword = async (password:string) => {

      
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        
        return password;
    };
    const comparePassword = (password:string, hasedPassword:string) => {
        return bcrypt.compare(password, hasedPassword);
    };
    const generateToken = (payload: string) => {
        if (configKeys.JWT_SECRET) {
          const token = jwt.sign({ payload }, configKeys.JWT_SECRET, {
            expiresIn: "5d",
          });
          return token;
        } else {
          throw new Error("JWT_TOKEN_KEY is undefined");
        }
      };
    const verifyToken = (token:string) => {
        if (configKeys.JWT_SECRET) {
            
            const isVerify =  jwt.verify(token, configKeys.JWT_SECRET)
            return isVerify;
        }
    };

    return {
        encryptPassword, 
        comparePassword,
        generateToken,
        verifyToken
    }
      
}

export type AuthServices = typeof authServices;
export type AuthServiceReturn = ReturnType<AuthServices>