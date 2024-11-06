import UserService from '../service/userService'
import {validationResult} from 'express-validator'
import ApiError from '../exceptions/apiError'
import {NextFunction, Request, Response} from 'express'
import userService from "../service/userService";

class UserController {

    async registration(req:Request, res:Response, next:NextFunction){
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return next(ApiError.BadRequest('Validation error', errors.array()))
            }
            const {email, password, name, info, role, bookedParts} = req.body
            const userData = await UserService.registration(email, password, name, info, role, bookedParts)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 *60 * 60 * 1000, httpOnly: true, secure:true})
            return res.json(userData)
        }catch (e){
            next(e)
        }
    }

    async repeatedlySendActivationLink(req:Request, res:Response, next:NextFunction){
        try{
            const {email} = req.body
            await UserService.repeatedlySendActivationLink(email)
            return res.json()
        }catch (e){
            next(e)
        }
    }

    async login(req:Request, res:Response, next:NextFunction){
        try{
            const {email, password} = req.body
            const userData = await UserService.login(email, password)
            return res.json(userData)

        }catch (e){
            next(e)
        }
    }

    async logout(req:Request, res:Response, next:NextFunction){
        try{
            const {refreshToken} = req.cookies
            const token = await UserService.logout(refreshToken)
            return res.json(token)
        }catch (e){
            next(e)
        }
    }

    async activate(req:Request, res:Response, next:NextFunction){
        try{
            const activationLink = req.params.link
            await UserService.activate(activationLink)
            return res.redirect(String(process.env.CLIENT_URL))
        }catch (e){
            next(e)
        }
    }

    async reset(req:Request, res:Response, next:NextFunction){
        try{
            const resetLink = req.params.link
            await UserService.reset(resetLink)
            return res.redirect(String(process.env.SET_PASS_URL) + '/' + resetLink)
        }catch (e){
            next(e)
        }
    }

    async resetPassword(req:Request, res:Response, next:NextFunction){
        try{
            const {email} = req.body
            const userData = await UserService.resetPassword(email)
            return res.json(userData)
        }catch (e){
            next(e)
        }
    }

    async refresh(req:Request, res:Response, next:NextFunction){
        try{
            const { refreshToken } = req.body
            const userData = await UserService.refresh(refreshToken)

            return res.json(userData)
        }catch (e){
            next(e)

        }
    }

    async getMe(req:Request, res:Response, next:NextFunction){
        try{
            const me = await UserService.getMe(req?.headers?.authorization || '')
            return res.json(me)
        }catch (e){
            next(e)
        }
    }

    async changePassword(req:Request, res:Response, next:NextFunction){
        try{
            const {link, password} = req.body
            const userData = await UserService.changePassword(link, password)
            console.log(userData)
            return res.json(userData)
        }catch (e){
            next(e)
        }
    }

    async bookPart(req:Request, res:Response, next:NextFunction) {
      try {
        const userId = req.body.userId;
        const partId = req.body.partId;
        const data = await userService.bookPart(partId, userId);
        return res.json(data);
      } catch (e) {
          next(e)
      }
    }

}

export default new UserController();
