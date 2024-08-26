import {useState} from "react";
import AuthService from "../../service/authService";
import {useDispatch} from "react-redux";
import {partActions} from "../../redux/partSlice";
import {userActions} from "../../redux/userSlice";

const LoginForm = () => {

    const dispatch = useDispatch

    const  login = async (email, password) => {
        try{
            const response = await AuthService.login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            dispatch(userActions.setAuth(true))
            dispatch(userActions.setUser(response.data.user))
        }catch (e){
            console.log(e.response?.data?.message)
        }
    }

    const  registration = async (email, password) => {
        try{
            const response = await AuthService.registration(email, password)
            localStorage.setItem('token', response.data.accessToken)
            dispatch(userActions.setAuth(true))
            dispatch(userActions.setUser(response.data.user))
        }catch (e){
            console.log(e.response?.data?.message)
        }
    }

    const  logout = async () => {
        try{
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            dispatch(userActions.setAuth(false))
            dispatch(userActions.setUser({}))
        }catch (e){
            console.log(e.response?.data?.message)
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
            <button>Login</button>
            <button>Registration</button>
        </div>
    )

}

export default LoginForm