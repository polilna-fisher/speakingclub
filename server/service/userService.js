const UserModel = require('../models/userModel')
const {hash, compare} = require("bcrypt");
const uuid = require("uuid")
const MailService = require('../service/mailService')
const TokenService = require('../service/tokenService')
const UserDto = require('../dtos/userDto')
const ApiError = require('../exceptions/apiError')

class UserService{

    async registration(email, password){
        const candidate = await UserModel.findOne({email})
        if(candidate){
            throw ApiError.BadRequest(`User with email ${email} has already exist`)
        }
        const hashPassword = await hash(password, 3)
        const activationLink = uuid.v4()
        const user = await UserModel.create({email: email, password: hashPassword, isActivated:false, activationLink: activationLink})
        await MailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)
        const userDto = new UserDto(user)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)

        return{
            ...tokens,
            user: userDto

        }
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({activationLink})
        if(!user){
            throw ApiError.BadRequest('Incorrect link')
        }
        user.isActivated = true
        await user.save()
    }

    async login(email, password){
        const user = await UserModel.findOne({email})
        if(!user){
            throw ApiError.BadRequest('User is not exist')
        }
        const isPassEqual = await compare(password, user.password)
        if(!isPassEqual){
            throw ApiError.BadRequest('Password is incorrect')
        }
        const userDto = new UserDto(user)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)
        return{
            ...tokens,
            user: userDto

        }
    }
    async logout(refreshToken){
        const token = await TokenService.removeToken(refreshToken)
        return token
    }
}
module.exports = new UserService()