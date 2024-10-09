import $api from "../http";
import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/authReponse";

export default class AuthService {


    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {email, password})
    }

    static async registration(email: string,
                              password: string,
                              name: string,
                              country: string | undefined,
                              about: string | undefined,
                              role = 'guest'): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/registration', {email, password, name, country, about, role})
    }

    static async logout(): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/logout')
    }

    static async resetPassword(email: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/reset-password', {email})
    }

}
