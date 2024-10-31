import {FC, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {authActions} from "../../../../redux/authSlice";
import styles from "./setPassword.module.sass";
import {useForm} from 'react-hook-form'
import {Link} from "react-router-dom";
import {routes} from "../../../../routes";
import {userActions} from "../../../../redux/userSlice";
import StateModal from "../stateModal/stateModal";

const SetPassword: FC = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.user.user);
    const hasPasswordChanged = useAppSelector((state) => state.auth.isPasswordHasSuccessfullyChanged);
    const isLoading = useAppSelector((state) => state.auth.isSettingPasswordLoading);

    const [password, setPassword] = useState('')
    const [againPassword, setAgainPassword] = useState('')

    const setNewPassword = () => {
        if((password.length > 3) && (password === againPassword)){
            const link = window.location.href.split('/')[window.location.href.split('/').length - 1]
            dispatch(authActions.setPasswordLoading({link, password}))
        }else{
            console.log('Passwords are different')
        }

    }

    const {register, handleSubmit} = useForm( )


    return (
        <div>
            {
                isLoading
                    ? <StateModal setModal={() => {}} modal={true}/>
                    : <StateModal setModal={() => {}} modal={false}/>
            }
            {
                !!hasPasswordChanged
                    ? <div className={styles.text_container}>
                        <p>Your password has successfully changed</p>
                        <Link to={routes.login} className={styles.login_form_button}>Log in</Link>
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