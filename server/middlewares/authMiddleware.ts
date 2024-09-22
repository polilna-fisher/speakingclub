 import ApiError from '../exceptions/apiError'
import TokenService from '../service/tokenService'
import {NextFunction, Request, Response} from "express";

export default function (req:Request | any, res:Response, next: NextFunction) {
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