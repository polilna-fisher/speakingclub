import jwt from 'jsonwebtoken'
import TokenModel from '../models/tokenModel'

class TokenService{
    generateTokens(payload:any){
        const accessToken = jwt.sign(payload, String(process.env.JWT_ACCESS_SECRET), {expiresIn: '10s'})
        const refreshToken = jwt.sign(payload, String(process.env.JWT_REFRESH_SECRET), {expiresIn: '30d'})
        return{
            accessToken,
            refreshToken
        }
    }
    validateAccessToken(token:string) {
        try{
            const userData = jwt.verify(token, String(process.env.JWT_ACCESS_SECRET))
            return userData
        }
        catch (e){
            return null

        }

    }
    validateRefreshToken(token:string) {
        try{
            const userData = jwt.verify(token, String(process.env.JWT_REFRESH_SECRET))
            return userData
        }
        catch (e){
            return null

        }

    }

    async saveToken(userId:string, refreshToken:string){
        const tokenData = await TokenModel.findOne({user:userId})
        if(tokenData){
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = await TokenModel.create({user:userId, refreshToken})
        return token
    }

    async removeToken(refreshToken:string){
        const tokenData = await TokenModel.deleteOne({refreshToken})
        return tokenData
    }
    async findToken(refreshToken:string){
        const tokenData = await TokenModel.findOne({refreshToken})
        return tokenData
    }

}
export default new TokenService()