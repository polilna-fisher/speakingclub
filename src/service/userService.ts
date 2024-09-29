import $api, {API_URL} from "../http";
import axios, {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";
import {AuthResponse} from "../models/authReponse";

export default class UserService{

    static fetchUsers(): Promise<AxiosResponse<IUser[]>>{
        return $api.get<IUser[]>('/users')
    }

    // await axios.get<AuthResponse>(`${API_URL }/refresh`, {withCredentials: true})
    static fetchMe(): Promise<AxiosResponse<IUser[]>>{
        return $api.get<IUser[]>('/me')
    }

}


