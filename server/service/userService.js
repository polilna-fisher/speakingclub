const UserModel = require('../models/userModel')
const {hash} = require("bcrypt");
const uuid = require("uuid")
const MailService = require('../service/mailService')
const TokenService = require('../service/tokenService')
const UserDto = require('../dtos/userDto')
class UserService{

    async registration(email, password){
        const candidate = await UserModel.findOne({email})
        if(candidate){
            throw new Error(`User with email ${email} has already exist`)
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
}
module.exports = new UserService()