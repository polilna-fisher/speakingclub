import styles from "./profile.module.sass";
import {FC} from "react";
import {useAppSelector} from "../../../../redux/store";
import LoginForm from "../loginForm/loginForm";

const Profile:FC = () => {
    const user = useAppSelector((state) => state.user.user)
    const accessToken = useAppSelector((state) => state.auth.accessToken);


    return (
    <div className={styles.profile_container}>
        {
            !!accessToken
                ? <div className={styles.profile_info}>
                    <div>{user?.name}</div>
                    <div>{user?.email}</div>
                    <div>{user?.about}</div>
                    <div>{user?.country}</div>
                    <div>{user?.role}</div>
                </div>
                : <LoginForm/>
        }
    </div>
    );
};

export default Profile;
