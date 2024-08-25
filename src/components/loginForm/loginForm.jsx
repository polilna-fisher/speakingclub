import {useState} from "react";

const LoginForm = () => {
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