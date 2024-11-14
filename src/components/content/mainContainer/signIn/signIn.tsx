import {FC, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {authActions} from "../../../../redux/authSlice";
import styles from "./signIn.module.sass";
import {useForm} from 'react-hook-form'
import {Link} from "react-router-dom";
import {routes} from "../../../../routes";
import StateModal from "../stateModal/stateModal";

const SignIn: FC = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.user.user);
    const accessToken = useAppSelector((state) => state.auth.accessToken);
    const isLoading = useAppSelector((state) => state.auth.isLoading);
    const isError = useAppSelector((state) => state.auth.isError);

    const {register, handleSubmit, watch,  formState: {errors}} = useForm({defaultValues:{
        email: '', password: ''
        }})
    const email = watch('email')
    const password = watch('password')


    return (
        <div>
            {isLoading
                ? <StateModal setModal={() => {}} modal={true}/>
                : <StateModal setModal={() => {}} modal={false}/>
            }

            <form className={styles.login_form_container}
                  onSubmit={handleSubmit(() => dispatch(authActions.loading({email, password})))}>
                <div className={styles.login_form_inner_container}>
                    <input className={styles.login_form_input}
                           {...register("email", {
                               required: 'Email is required',
                               pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email is incorrect'}
                           })}
                           type={'text'}
                           placeholder={'email'}
                           value={email}
                    />
                    <p className={styles.error_message}>{errors.email?.message}</p>
                </div>
                <div className={styles.login_form_inner_container}>
                    <input className={styles.login_form_input}
                           {...register("password", {
                               required: 'Password is required', minLength: {
                                   value: 4, message: 'Min length is 4 '
                               }
                           })}
                           type={'password'}
                           placeholder={'password'}
                           value={password}
                    />
                    <p className={styles.error_message}>{errors.password?.message}</p>
                </div>

                <input type={'submit'} className={styles.login_form_button}
                       value={'Sign In'}
                />
                <Link className={styles.login_form_link} to={routes.registration}>I don't have an account</Link>
                <Link className={styles.login_form_link} to={routes.resetPassword}>Forgot your password?</Link>
            </form>

        </div>
    )

}

export default SignIn