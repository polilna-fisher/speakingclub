import $api from "../http";
import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/authReponse";

export default class AuthService{


    static async login(email:string, password:string):Promise<AxiosResponse<AuthResponse>>{
    return $api.post<AuthResponse>('/login', {email, password})
}

    static async registration(email:string, password:string):Promise<AxiosResponse<AuthResponse>>{
        return $api.post('/registration', {email, password})
    }

    static async logout():Promise<AxiosResponse<AuthResponse>>{
        return $api.post('/logout')
    }
}
