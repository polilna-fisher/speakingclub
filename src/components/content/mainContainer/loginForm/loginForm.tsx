import {FC, useEffect, useState} from "react";
import store, {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {authActions} from "../../../../redux/authSlice";
import styles from "./loginForm.module.sass";

const LoginForm: FC = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.user.user);
    const accessToken = useAppSelector((state) => state.auth.accessToken);
    const isLoading = useAppSelector((state) => state.user.isLoading);
    const isError = useAppSelector((state) => state.user.isError);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <div>
            {
                isLoading ? `loading` :
                    <h1>{!!accessToken ? `User has authorised + ${user?.email}` : `Please, authorise`}</h1>
            }


            {!!accessToken
                ? <div className={styles.login_form_container}>
                    <button className={styles.login_form_button}
                            onClick={() => dispatch(authActions.logout())}>Logout</button>
                </div>

                : <div className={styles.login_form_container}>
                    <input className={styles.login_form_input}
                           type={'text'}
                           placeholder={'email'}
                           value={email}
                           required={true}
                           onChange={(event) => setEmail(event.target.value)}/>
                    <input className={styles.login_form_input}
                           type={'text'}
                           placeholder={'password'}
                           value={password}
                           required={true}
                           onChange={(event) => setPassword(event.target.value)}/>
                    <button className={styles.login_form_button}
                            onClick={() => dispatch(authActions.login({email, password}))}>Login</button>
                    <button className={styles.login_form_button}
                            onClick={() => dispatch(authActions.register({email, password}))}>Registration</button>
                </div>


            }

        </div>
    )

}

export default LoginForm