import {FC, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {authActions} from "../../../../redux/authSlice";
import styles from "./setPassword.module.sass";
import {useForm} from 'react-hook-form'
import {Link} from "react-router-dom";
import {routes} from "../../../../routes";
import {userActions} from "../../../../redux/userSlice";

const SetPassword: FC = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.user.user);
    const accessToken = useAppSelector((state) => state.auth.accessToken);
    const isLoading = useAppSelector((state) => state.user.isLoading);
    const isError = useAppSelector((state) => state.user.isError);

    const [password, setPassword] = useState('')
    const [againPassword, setAgainPassword] = useState('')

    const setNewPassword = () => {
        if((password.length > 3) && (password === againPassword)){
            dispatch(authActions.setPassword({password}))
            const link = window.location.href.split('/')[window.location.href.split('/').length - 1]
            console.log(password, 'newPasswordnewPassword pass')
            dispatch(authActions.setPassword({link, password}))
        }else{
            console.log('Passwords are different')
        }

    }

    const {register, handleSubmit} = useForm( )


    return (
        <div>
            {!!accessToken
                ? <div className={styles.login_form_container}>
                    <button className={styles.login_form_button}
                            onClick={() => dispatch(authActions.logout())}>Logout</button>
                </div>

                : <form className={styles.login_form_container} onSubmit={handleSubmit((data) => {
                })}>
                    <div className={styles.login_form_text}>
                        Change your password
                    </div>
                    <input className={styles.login_form_input}
                           {...register("new password")}
                           type={'text'}
                           placeholder={'new password'}
                           value={password}
                           required={true}
                           onChange={(event) => setPassword(event.target.value)}/>
                    <input className={styles.login_form_input}
                           {...register("again password")}
                           type={'text'}
                           placeholder={'again password'}
                           value={againPassword}
                           required={true}
                           onChange={(event) => setAgainPassword(event.target.value)}/>
                    <input type={'submit'} className={styles.login_form_button}
                           onClick={() => setNewPassword()}
                           value={'Reset password'}/>
                    <Link className={styles.login_form_link} to={routes.login}>I have an account</Link>
                </form>


            }

        </div>
    )

}

export default SetPassword