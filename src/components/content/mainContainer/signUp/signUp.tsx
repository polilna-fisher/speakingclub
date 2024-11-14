import {FC, useEffect, useState} from "react";
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
    const isLoading = useAppSelector((state) => state.auth.isLoading);
    const isError = useAppSelector((state) => state.auth.isError);

    const [name, setName] = useState('')
    const [info, setInfo] = useState('')

    const {register, handleSubmit, watch,  formState: {errors}} = useForm({defaultValues:{
            email: '', password: '', confirmPassword: '', name: '', info: ''
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
                  onSubmit={handleSubmit(() => dispatch(authActions.register({email, password, name, info})))}>
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
                <div className={styles.login_form_inner_container}>
                    <input className={styles.login_form_input}
                           {...register("password")}
                           type={'text'}
                           placeholder={'password'}
                           value={password}
                        // required={true}
                        // onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className={styles.login_form_inner_container}>
                    <input className={styles.login_form_input}
                           {...register("name")}
                           type={'text'}
                           placeholder={'name'}
                           value={name}
                           required={true}
                           onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className={styles.login_form_inner_container}>
                    <input className={styles.login_form_input}
                           {...register("info")}
                           type={'text'}
                           placeholder={'info'}
                           value={info}
                           required={false}
                           onChange={(event) => setInfo(event.target.value)}/>
                </div>
                <input type={'submit'}
                       className={styles.login_form_button}
                       value={'Sign Up'}/>
                <Link className={styles.login_form_link} to={routes.login}>I have an account</Link>
            </form>

        </div>
    )

}

export default SignIn