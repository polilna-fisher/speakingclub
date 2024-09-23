 import {FC, useState} from "react";
 import {login, registration} from "../../utils/authFunctions";

const LoginForm:FC = () => {

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