import {FC, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {authActions} from "../../../../redux/authSlice";
import styles from "./resetPassword.module.sass";
import {useForm} from 'react-hook-form'
import {Link} from "react-router-dom";
import {routes} from "../../../../routes";
import StateModal from "../stateModal/stateModal";

const ResetPassword: FC = () => {
    const dispatch = useAppDispatch()
    const isResetPasswordAllowed = useAppSelector((state) => state.auth.isResetPasswordAllowed);
    const isLoading = useAppSelector((state) => state.auth.isResetLoading);

    const [email, setEmail] = useState('')
    const {register, handleSubmit} = useForm( )



    return (
        <div>
            {
                isLoading
                    ? <StateModal setModal={() => {}} modal={true}/>
                    : <StateModal setModal={() => {}} modal={false}/>
            }

            {isResetPasswordAllowed
                ? <div className={styles.text_container} >
                    <p>Instructions for resetting your password have been sent to your email.</p>
                    <p>Please check your inbox (and your spam folder, if necessary) to complete the process.</p>
                </div>

                : <form className={styles.login_form_container} onSubmit={handleSubmit(() => {
                })}>
                    <div className={styles.login_form_text}>
                        Enter your email address and we'll send you a link you can use to pick a new password.
                    </div>
                    <input className={styles.login_form_input}
                           {...register("email")}
                           type={'text'}
                           placeholder={'email'}
                           value={email}
                           required={true}
                           onChange={(event) => setEmail(event.target.value)}/>
                    <input type={'submit'} className={styles.login_form_button}
                           onClick={() => {
                               dispatch(authActions.resetLoading({email}))
                           }}
                           value={'Reset password'}/>
                    <Link className={styles.login_form_link} to={routes.login}>I have an account</Link>
                </form>


            }

        </div>
    )

}

export default ResetPassword