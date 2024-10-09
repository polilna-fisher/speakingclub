import {FC, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {authActions} from "../../../../redux/authSlice";
import styles from "./resetPassword.module.sass";
import {useForm} from 'react-hook-form'
import {Link} from "react-router-dom";
import {routes} from "../../../../routes";

const SignIn: FC = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.user.user);
    const accessToken = useAppSelector((state) => state.auth.accessToken);
    const isLoading = useAppSelector((state) => state.user.isLoading);
    const isError = useAppSelector((state) => state.user.isError);

    const [email, setEmail] = useState('')

    const {register, handleSubmit} = useForm( )


    return (
        <div>
            {!!accessToken
                ? <div className={styles.login_form_container}>
                    <button className={styles.login_form_button}
                            onClick={() => dispatch(authActions.logout())}>Logout</button>
                </div>

                : <form className={styles.login_form_container} onSubmit={handleSubmit((data) => {
                    console.log(data, 'fdfdfd')
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
                           onClick={() => dispatch(authActions.resetPassword({email}))}
                           value={'Reset password'}/>
                    <Link className={styles.login_form_link} to={routes.login}>I have an account</Link>
                </form>


            }

        </div>
    )

}

export default SignIn