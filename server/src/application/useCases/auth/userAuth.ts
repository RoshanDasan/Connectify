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

    

    let p = await authService.encryptPassword(user.password);
    console.log(p,'---//');
    
    const { _id: userId} = await userRepository.addUser(user);
    console.log()
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
    console.log(user,'///');
    
    if(!user){
        throw new AppError("User not exist", HttpStatus.UNAUTHORIZED);
    }
    const checkPassword: any =  authService.comparePassword(password, user.password);
    if(!checkPassword){
        throw new AppError("Password you entered was incorrect", HttpStatus.UNAUTHORIZED);
    }
    const token = authService.generateToken(user._id.toString());
    return token;
}; 