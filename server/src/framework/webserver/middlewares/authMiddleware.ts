import { Request, Response, NextFunction } from "express";
import { HttpStatus } from "../../../types/httpstatuscodes";
import AppError from "../../../utilities/appError"; 
import { authServices } from "../../services/authServices";


const userAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    let token: string | null = null;
    if (req.headers.authorization && req.headers.authorization.startsWith(`Bearer `)) {
      token = req.headers.authorization.split(' ')[1];
    }
  
    if (!token) {
      throw new AppError("Token not found", HttpStatus.UNAUTHORIZED);
    }
    try {
      const { payload }: any = authServices().verifyToken(token);
     
      
      next(); // Call next to proceed to the next middleware or route handler
    } catch (error) {
      throw new AppError('Unauthorized user', HttpStatus.UNAUTHORIZED);
    }
  };
  

export default userAuthMiddleware;