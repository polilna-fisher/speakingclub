import styles from "./profile.module.sass";
import {FC, useEffect} from "react";
import {useAppSelector} from "../../../../redux/store";
import LoginForm from "../signIn/signIn";

const Profile:FC = () => {
    const user = useAppSelector((state) => state.user.user)
    const accessToken = useAppSelector((state) => state.auth.accessToken);

    useEffect(() => {
        console.log(!!accessToken, user?.isActivated,  'trtr')
    }, [user, accessToken]);


    return (
    <div className={styles.profile_container}>
        {
            !user?.isActivated
                ? <div className={styles.profile_info}>
                    <div>{user?.name}</div>
                    <div>{user?.email}</div>
                    <div>{user?.about}</div>
                    <div>{user?.country}</div>
                    <div>{user?.role}</div>
                </div>
                : null
        }
        {/*{*/}
        {/*    !accessToken*/}
        {/*        ? <LoginForm/>*/}
        {/*        : null*/}
        {/*}*/}
        {/*{*/}
        {/*    !!accessToken && !user?.isActivated*/}
        {/*        ? <div className={styles.text_container}>*/}
        {/*            <p>Activation link has been sent to your email.</p>*/}
        {/*            <p>Please check your inbox (and your spam folder, if necessary) to complete the process.</p>*/}
        {/*        </div>*/}
        {/*        : null*/}
        {/*}*/}
    </div>
    );
};

export default Profile;
