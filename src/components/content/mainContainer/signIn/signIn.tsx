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

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {register, handleSubmit, formState: {errors}} = useForm( )

    console.log(errors, 'cvcvcv')


    return (
        <div>
            {isLoading
                ? <StateModal setModal={() => {}} modal={true}/>
                : <StateModal setModal={() => {}} modal={false}/>
            }

            <form className={styles.login_form_container} onSubmit={handleSubmit((data) => {console.log(data, 'fdfdfd')})}>
                    <input className={styles.login_form_input}
                           {...register("email", {required: true})}
                           type={'text'}
                           placeholder={'email'}
                           value={email}
                           required={true}
                           onChange={(event) => setEmail(event.target.value)}/>
                    <input className={styles.login_form_input}
                           {...register("password", {required: true, minLength: 4})}
                           type={'text'}
                           placeholder={'password'}
                           value={password}
                           required={true}
                           onChange={(event) => setPassword(event.target.value)}/>
                    <input type={'submit'} className={styles.login_form_button}
                            onClick={() => dispatch(authActions.loading({email, password}))} value={'Sign In'}/>
                    <Link className={styles.login_form_link} to={routes.registration}>I don't have an account</Link>
                    <Link className={styles.login_form_link} to={routes.resetPassword}>Forgot your password?</Link>
                </form>

        </div>
    )

}

export default SignIn