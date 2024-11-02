import $api, {API_URL} from "../http";
import axios, {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";
import {AuthResponse} from "../models/authReponse";
import {baseURL} from "../constants";

export default class UserService{

    static fetchUsers(): Promise<AxiosResponse<IUser[]>>{
        return $api.get<IUser[]>('/users')
    }

    // await axios.get<AuthResponse>(`${API_URL }/refresh`, {withCredentials: true})
    static fetchMe(): Promise<AxiosResponse<IUser[]>>{
        return $api.get<IUser[]>('/me')
    }

    static bookPart = async (data: {partId: string, userId: string}):Promise<boolean> => {
        const response = await fetch(`${baseURL}/api/bookPart`, {
            method: "PATCH",
            body: JSON.stringify({
                partId: data.partId,
                userId: data.userId
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        return await response.json();
    };

}


