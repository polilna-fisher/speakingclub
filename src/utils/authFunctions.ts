import {userActions} from "../redux/userSlice";
import AuthService from "../service/authService";
import {useAppDispatch} from "../redux/store";
import {API_URL} from "../http";
import {AuthResponse} from "../models/authReponse";
import axios from "axios";


export const  login = async (email: string, password: string) =>  {
    try{
        const response = await AuthService.login(email, password)
        console.log(response)
        localStorage.setItem('token', response.data.accessToken)
        userActions.setAuth(true)
        userActions.setUser(response.data.user)
    }catch (e){
        if (e instanceof Error) {
            console.log(e.message);
        } else {
            console.error('An unexpected error occurred:', e);
        }        }
}

export const  registration = async (email:string, password: string) => {
    try{
        const response = await AuthService.registration(email, password)
        console.log(response)
        localStorage.setItem('token', response.data.accessToken)
        userActions.setAuth(true)
        userActions.setUser(response.data.user)
    }catch (e){
        if (e instanceof Error) {
            console.log(e.message);
        } else {
            console.error('An unexpected error occurred:', e);
        }
    }
}

export const  logout = async () => {
    try{
        const response = await AuthService.logout()
        localStorage.removeItem('token')
        userActions.setAuth(false)
        userActions.setUser({})
    }catch (e){
        if (e instanceof Error) {
            console.log(e.message);
        } else {
            console.error('An unexpected error occurred:', e);
        }
    }
}

export const checkAsync = async  () => {
    try{
        const response = await axios.get<AuthResponse>(`${API_URL }/refresh`, {withCredentials: true })

        console.log(response)
        localStorage.setItem('token', response.data.accessToken)
        userActions.setAuth(true)
        userActions.setUser(response.data.user)
    }
    catch (e){
        console.log(e)
    }

}