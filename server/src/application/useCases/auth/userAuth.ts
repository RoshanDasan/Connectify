import { HttpStatus } from '../../../types/httpstatuscodes';
import AppError from '../../../utilities/appError';
import { UserDbInterface } from '../../repositories/userDbRepositories';
import { AuthServiceInterface } from '../../services/authServiceInterface';

export const userRegister =async (user:{ 
    name: string;
    userName: string;
    email: string;
    number: number;
    password: any;
},
userRepository: ReturnType<UserDbInterface>,
authService: ReturnType<AuthServiceInterface>
) => {
    // bussiness logic
    user.email = user.email.toLowerCase();
    const isEmailExist: any = await userRepository.getUserByEmail(user.email);

    if(isEmailExist){
        throw new AppError('Email already exist : ', HttpStatus.UNAUTHORIZED)
    }

    

    let encryptedPassword = await authService.encryptPassword(user.password);
    user.password = encryptedPassword
    
    const { _id: userId} = await userRepository.addUser(user);
    const token = authService.generateToken(userId.toString());
    return token;

};

export const userLogin =async (
    userName: string,
    password: string,
    userRepository: ReturnType<UserDbInterface>,
    authService: ReturnType<AuthServiceInterface>
) => {
    
    const user: any = await userRepository.getUserByUserName(userName);
    
    if(!user){
        throw new AppError("User not exist", HttpStatus.UNAUTHORIZED);
    }
    const checkPassword: any = await authService.comparePassword(password, user.password);

    if(!checkPassword){
        throw new AppError("Password you entered was incorrect", HttpStatus.UNAUTHORIZED);
    }
    const token: string = await authService.generateToken(user._id.toString());
    
    return {
        token,
        user
    };
}; 
