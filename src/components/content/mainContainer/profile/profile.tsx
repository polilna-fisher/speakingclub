import styles from "./profile.module.sass";
import {FC, useEffect} from "react";
import {useAppSelector} from "../../../../redux/store";

const Profile: FC = () => {
    const user = useAppSelector((state) => state.user.user)


    return (
        <div className={styles.profile_container}>
            <div className={styles.profile_info}>
                <div>{user?.name}</div>
                <div>{user?.email}</div>
                <div>{user?.about}</div>
                <div>{user?.country}</div>
                <div>{user?.role}</div>
            </div>

        </div>
    );
};

export default Profile;
