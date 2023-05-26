import { HttpStatus } from '../../../types/httpstatuscodes';
import AppError from '../../../utilities/appError';
import { AdminDbInterface } from '../../repositories/adminDbRepositories';
import { AuthServiceInterface } from '../../services/authServiceInterface';


export const adminLogin =async (
    email: string,
    password: string,
    adminRepository: ReturnType<AdminDbInterface>,
    authService: ReturnType<AuthServiceInterface>
) => {
   
    
    const admin: any = await adminRepository.getAdminByEmail(email);

    
    if(!admin){
        throw new AppError("Admin not exist", HttpStatus.UNAUTHORIZED);
    }
    const checkPassword: any = await authService.comparePassword(password, admin.password);
    if(!checkPassword){
        throw new AppError("Password you entered was incorrect", HttpStatus.UNAUTHORIZED);
    }
    const token: string = await authService.generateToken(admin._id.toString());
    console.log(token,'lllllll');
    
    return {
        token,
        admin
    };
}; 
