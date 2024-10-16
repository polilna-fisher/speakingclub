import {FC, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {authActions} from "../../../../redux/authSlice";
import styles from "./signUp.module.sass";
import {useForm} from 'react-hook-form'
import {Link} from "react-router-dom";
import {routes} from "../../../../routes";
import StateModal from "../stateModal/stateModal";

const SignIn: FC = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.user.user);
    const accessToken = useAppSelector((state) => state.auth.accessToken);
    const isLoading = useAppSelector((state) => state.user.isLoading);
    const isError = useAppSelector((state) => state.user.isError);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [info, setInfo] = useState('')

    const {register, handleSubmit} = useForm( )


    return (
        <div>
            {!!accessToken
                ? <div className={styles.text_container}>
                    <p>Activation link has been sent to your email.</p>
                    <p>Please check your inbox (and your spam folder, if necessary) to complete the process.</p>
                </div>

                : <form className={styles.login_form_container} onSubmit={handleSubmit((data) => {
                    console.log(data, 'fdfdfd')
                })}>
                    <input className={styles.login_form_input}
                           {...register("email")}
                           type={'text'}
                           placeholder={'email'}
                           value={email}
                           required={true}
                           onChange={(event) => setEmail(event.target.value)}/>
                    <input className={styles.login_form_input}
                           {...register("password")}
                           type={'text'}
                           placeholder={'password'}
                           value={password}
                           required={true}
                           onChange={(event) => setPassword(event.target.value)}/>
                    <input className={styles.login_form_input}
                           {...register("name")}
                           type={'text'}
                           placeholder={'name'}
                           value={name}
                           required={true}
                           onChange={(event) => setName(event.target.value)}/>
                    <input className={styles.login_form_input}
                           {...register("country")}
                           type={'text'}
                           placeholder={'country'}
                           value={country}
                           required={false}
                           onChange={(event) => setCountry(event.target.value)}/>
                    <input className={styles.login_form_input}
                           {...register("info")}
                           type={'text'}
                           placeholder={'info'}
                           value={info}
                           required={false}
                           onChange={(event) => setInfo(event.target.value)}/>
                    <input type={'submit'}  className={styles.login_form_button}
                            onClick={() => dispatch(authActions.register({email, password, name}))}  value={'Sign Up'}/>
                    <Link className={styles.login_form_link} to={routes.login}>I have an account</Link>
                </form>


            }

        </div>
    )

}

export default SignIn