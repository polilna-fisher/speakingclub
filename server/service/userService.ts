import UserModel from '../models/userModel';
import {hash, compare} from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import MailService from './mailService';
import TokenService from './tokenService';
import UserDto from '../dtos/userDto';
import ApiError from '../exceptions/apiError';
import {AxiosResponse} from "axios";

class UserService{

    async registration(email:string, password:string, name:string, about:string, country: string, role:string='guest'){
        const candidate = await UserModel.findOne({email})
        if(candidate){
            throw ApiError.BadRequest(`User with email ${email} has already exist`)
        }
        const hashPassword = await hash(password, 3)
        const activationLink = uuidv4()
        const user:any = await UserModel.create({
            email: email,
            password: hashPassword,
            isActivated:false,
            activationLink: activationLink,
            name: name,
            about: about,
            country: country,
            role: role})
        await MailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)
        const userDto:any = new UserDto(user)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)

        return tokens
    }

    async activate(activationLink:string) {
        const user:any = await UserModel.findOne({activationLink})
        if(!user){
            throw ApiError.BadRequest('Incorrect link')
        }
        user.isActivated = true
        await user.save()
    }

    async resetPassword(resetLink:string) {
        const user:any = await UserModel.findOne({resetLink})

        // if(!user){
        //     throw ApiError.BadRequest('Incorrect link')
        // }
        // user.isActivated = true
        // await user.save()
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

        return tokens
    }
    async logout(refreshToken:string){
        const token = await TokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken:string){
        const userData:any = TokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await TokenService.findToken(refreshToken)
        if(!userData || !tokenFromDb){
            throw ApiError.UnauthorizedError()
        }
        const user:any = await UserModel.findById(userData.id)
        const userDto:any = new UserDto(user)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)

        return tokens
    }

    async getAllUsers(){
        const users = await UserModel.find()
        return users
    }

    async getMe(accessToken:string){
        const token = accessToken.replace('Bearer ', '')
        const userData:any = TokenService.validateAccessToken(token)

        if(!userData){
            throw ApiError.UnauthorizedError()
        }
        const user:any = await UserModel.findById(userData.id)
        const userDto:any = new UserDto(user)

        return userDto
    }

}
export default new UserService()