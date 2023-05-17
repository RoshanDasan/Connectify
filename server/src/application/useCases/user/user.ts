import { HttpStatus } from '../../../types/httpstatuscodes';
import AppError from '../../../utilities/appError';
import { UserDbInterface } from '../../repositories/userDbRepositories';

export const userById =async (id:string, repository: ReturnType<UserDbInterface>) => {
    const user: any = await repository.getUserById(id)

    if(!user){
        throw new AppError("user not exist", HttpStatus.UNAUTHORIZED);
    }
    return user;
}