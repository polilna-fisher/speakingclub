 import {FC, useEffect, useState} from "react";
 import {useAppDispatch} from "../../redux/store";
 import {authActions} from "../../redux/authSlice";

const LoginForm:FC = () => {
    const dispatch = useAppDispatch()

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
            <button onClick={() => dispatch(authActions.login({email, password}))}>Login</button>
            <button onClick={() => dispatch(authActions.register({email, password}))}>Registration</button>

        </div>
    )

}

 export default LoginForm