import UserModel from '../models/userModel';
import {hash, compare} from "bcrypt";
import {v4 as uuidv4} from 'uuid';
import MailService from './mailService';
import TokenService from './tokenService';
import UserDto from '../dtos/userDto';
import ApiError from '../exceptions/apiError';
import {IUser} from "../../src/models/IUser";

class UserService {

    async registration(email: string, password: string, name: string, info?: string,
                       role: string = 'guest', bookedParts = [], subscription = null) {
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw ApiError.BadRequest(`User with email ${email} has already exist`)
        }
        const hashPassword = await hash(password, 3)
        const activationLink = uuidv4()
        const user: any = await UserModel.create({
            email: email,
            password: hashPassword,
            isActivated: false,
            activationLink: activationLink,
            resetPasswordLink: '',
            allowReset: false,
            name: name,
            info: info,
            role: role,
            bookedParts: bookedParts,
            subscription: subscription
        })
        await MailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)
        const userDto: any = new UserDto(user)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)

        return tokens
    }

    async repeatedlySendActivationLink(email: string) {
        const candidate = await UserModel.findOne({email})
        if (!candidate) {
            throw ApiError.BadRequest(`User with email ${email} isn't exist`)
        }
        const newActivationLink = uuidv4()
        const user: any = await UserModel.updateOne({email: email}, {activationLink: newActivationLink})
        await MailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${newActivationLink}`)

        return user
    }

    async activate(activationLink: string) {
        const user: any = await UserModel.findOne({activationLink})
        if (!user) {
            throw ApiError.BadRequest('Incorrect link')
        }
        user.isActivated = true
        await user.save()
    }

    async reset(resetPasswordLink: string) {
        const user: any = await UserModel.findOne({resetPasswordLink})
        if (!user) {
            throw ApiError.BadRequest('Incorrect link')
        }
        user.allowReset = true
        await user.save()
    }

    async resetPassword(email: string) {
        const candidate = await UserModel.findOne({email})
        if (!candidate) {
            throw ApiError.BadRequest(`User with email ${email} isn't exist`)
        }
        const resetLink = uuidv4()
        const user = await UserModel.updateOne({email: email}, {resetPasswordLink: resetLink, allowReset: true})
        const candidate2 = await UserModel.findOne({email})
        await MailService.sendResetPasswordMail(email, `${process.env.API_URL}/api/reset/${resetLink}`)

        return user
    }

    async changePassword(link: string, password: string) {
        const candidate = await UserModel.findOne({resetPasswordLink: link, allowReset: true})
        console.log(password, candidate, 'resres pass')
        if (!candidate) {
            throw ApiError.BadRequest(`Your link is incorrect. Please, try again`)
        }
        const hashPassword = await hash(password, 3)
        const user: any = await UserModel.updateOne({resetPasswordLink: link}, {
            password: hashPassword,
            allowReset: false,
            resetPasswordLink: ''
        })
        return candidate.email

    }

    async login(email: string, password: string) {
        const user: any = await UserModel.findOne({email})
        if (!user) {
            throw ApiError.BadRequest('Email or password is incorrect. Please try again.')
        }
        const isPassEqual = await compare(password, user.password)
        if (!isPassEqual) {
            throw ApiError.BadRequest('Email or password is incorrect. Please try again.')
        }
        const userDto: any = new UserDto(user)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)

        return tokens
    }

    async logout(refreshToken: string) {
        const token = await TokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken: string) {
        const userData: any = TokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await TokenService.findToken(refreshToken)
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }
        const user: any = await UserModel.findById(userData.id)
        const userDto: any = new UserDto(user)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)

        return tokens
    }

    async getMe(accessToken: string) {
        const token = accessToken.replace('Bearer ', '')
        const userData: any = TokenService.validateAccessToken(token)

        if (!userData) {
            throw ApiError.UnauthorizedError()
        }
        const user: any = await UserModel.findById(userData.id)
        const userDto: any = new UserDto(user)

        return userDto
    }

    async bookPart(partId: string, userId: string): Promise<IUser> {
        const candidate = await UserModel.findOne({_id: userId});
        const partsList = candidate?.bookedParts
        const isPartBooked = partsList?.filter(part => { return part !== partId })
        if(isPartBooked?.length !== partsList?.length) {
            const updatedUser: any = await UserModel.updateOne({ _id: userId }, {bookedParts: isPartBooked});
            const user:any = await UserModel.findOne({_id: userId});
            const userDto: any = new UserDto(user)
            return userDto
        }else{
            partsList?.push(partId)
            const updatedUser:any = await UserModel.updateOne({ _id: userId }, {bookedParts: partsList});
            const user:any = await UserModel.findOne({_id: userId});
            const userDto: any = new UserDto(user)
            return userDto
        }
    }

}

export default new UserService()