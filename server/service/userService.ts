import UserModel from '../models/userModel';
import {hash, compare} from "bcrypt";
import uuid from "uuid";
import MailService from './mailService';
import TokenService from './tokenService';
import UserDto from '../dtos/userDto';
import ApiError from '../exceptions/apiError';
import {IUserDto} from "../interfaces/IUserDto";

class UserService{

    async registration(email:string, password:string){
        const candidate = await UserModel.findOne({email})
        if(candidate){
            throw ApiError.BadRequest(`User with email ${email} has already exist`)
        }
        const hashPassword = await hash(password, 3)
        const activationLink = uuid.v4()
        const user:any = await UserModel.create({email: email, password: hashPassword, isActivated:false, activationLink: activationLink})
        await MailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)
        const userDto:any = new UserDto(user)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)

        return{
            ...tokens,
            user: userDto

        }
    }

    async activate(activationLink:string) {
        const user:any = await UserModel.findOne({activationLink})
        if(!user){
            throw ApiError.BadRequest('Incorrect link')
        }
        user.isActivated = true
        await user.save()
    }

    async login(email:string, password:string){
        const user:any = await UserModel.findOne({email})
        if(!user){
            throw ApiError.BadRequest('User is not exist')
        }
        const isPassEqual = await compare(password, user.password)
        if(!isPassEqual){
            throw ApiError.BadRequest('Password is incorrect')
        }
        const userDto:any = new UserDto(user)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)
        return{
            ...tokens,
            user: userDto

        }
    }
    async logout(refreshToken:string){
        const token = await TokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken:string){
        if(!refreshToken){
            throw ApiError.UnauthorizedError()
        }
        const userData:any = TokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await TokenService.findToken(refreshToken)
        if(!userData || !tokenFromDb){
            throw ApiError.UnauthorizedError()
        }
        const user:any = await UserModel.findById(userData.id)
        const userDto:any = new UserDto(user)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)

        return{
            ...tokens,
            user: userDto

        }
    }

    async getAllUsers(){
        const users = await UserModel.find()
        return users
    }

}
export default new UserService()