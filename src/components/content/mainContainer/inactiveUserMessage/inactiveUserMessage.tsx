import {FC} from "react";
import styles from "./inactiveUserMessage.module.sass";
import {authActions} from "../../../../redux/authSlice";
import {useAppDispatch, useAppSelector} from "../../../../redux/store";

const InactiveUserMessage: FC = () => {

    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.user.user);

    return (
        <div className={styles.text_container}>
            <p>Activation link has been sent to your email.</p>
            <p>Please check your inbox (and your spam folder, if necessary) to complete the process.</p>
            <input type={'submit'} className={styles.login_form_button}
                   onClick={() => dispatch(authActions.againSendActivationLink(user))}
                   value={'Send activation link again'}/></div>
    )

}

export default InactiveUserMessage