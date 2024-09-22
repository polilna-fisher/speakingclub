 import {FC, useState} from "react";
import AuthService from "../../service/authService";
import {userActions} from "../../redux/userSlice";
import {useAppDispatch} from "../../redux/store";

const LoginForm:FC = () => {

    const dispatch = useAppDispatch()

    const  login = async (email: string, password: string) =>  {
        try{
            const response = await AuthService.login(email, password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            dispatch(userActions.setAuth(true))
            dispatch(userActions.setUser(response.data.user))
        }catch (e){
            if (e instanceof Error) {
                console.log(e.message);
            } else {
                console.error('An unexpected error occurred:', e);
            }        }
    }

    const  registration = async (email:string, password: string) => {
        try{
            const response = await AuthService.registration(email, password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            dispatch(userActions.setAuth(true))
            dispatch(userActions.setUser(response.data.user))
        }catch (e){
            if (e instanceof Error) {
                console.log(e.message);
            } else {
                console.error('An unexpected error occurred:', e);
            }
        }
    }

    const  logout = async () => {
        try{
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            dispatch(userActions.setAuth(false))
            dispatch(userActions.setUser({}))
        }catch (e){
            if (e instanceof Error) {
                console.log(e.message);
            } else {
                console.error('An unexpected error occurred:', e);
            }
        }
    }



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return(
        <div>
            <input type={'text'}
                   placeholder={'email'}
                   value={email}
                   onChange={(event) => setEmail(event.target.value)}/>
            <input type={'text'}
                   placeholder={'password'}
                   value={password}
                   onChange={(event) => setPassword(event.target.value)}/>
            <button onClick={() => login(email, password )}>Login</button>
            <button onClick={() => registration(email, password)}>Registration</button>
        </div>
    )

}

export default LoginForm