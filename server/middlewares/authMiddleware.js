const ApiError = require('../exceptions/apiError')
const TokenService = require('../service/tokenService')
module.exports = function (req, res, next){
    try{
        const authorisationHeader = req.headers.authorization
        if(!authorisationHeader){
            return next(ApiError.UnauthorizedError())
        }
        const accessToken = authorisationHeader.split(' ')[1]
        if(!accessToken){
            return next(ApiError.UnauthorizedError())
        }
        const userData = TokenService.validateAccessToken(accessToken)
        if(!userData){
            return next(ApiError.UnauthorizedError())
        }
        req.user = userData
        next()
    }catch (e){
        return next(ApiError.UnauthorizedError())
    }
}