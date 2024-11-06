import styles from "./profile.module.sass";
import {FC, useEffect, useState} from "react";
import {useAppSelector} from "../../../../redux/store";
import PenIcon from './pen.svg'
import DoneIcon from './done.svg'

const Profile: FC = () => {
    const user = useAppSelector((state) => state.user.user)
    const [isEditingName, setEditingName] = useState(false)
    const [isEditingAbout, setEditingAbout] = useState(false)


    return (
        <div className={styles.profile_container}>
            <div className={styles.profile_info}>
                <div className={styles.profile_photo_container}>
                    <div className={styles.profile_photo_inner_container}>
                    </div>
                </div>
                <ul className={styles.fields_list}>
                    <li className={styles.field}>
                        <span className={styles.field_name}>Name: </span>
                        <input className={isEditingName ? styles.field_value_active : styles.field_value}
                               value={user?.name} disabled={!isEditingName}/>
                        <img alt="edit"
                             onClick={() => setEditingName(!isEditingName)}
                             src={isEditingName ? DoneIcon : PenIcon} className={styles.icon_edit}/>
                    </li>
                    <li className={styles.field}>
                        <span className={styles.field_name}>About: </span>
                        <textarea className={isEditingAbout ? styles.field_value_active : styles.field_value}
                                  value={user?.info} disabled={!isEditingAbout}/>
                        <img alt="edit"
                             onClick={() => setEditingAbout(!isEditingAbout)}
                             src={isEditingAbout ? DoneIcon : PenIcon} className={styles.icon_edit}/>
                    </li>
                    <li className={styles.field}>
                        <span className={styles.field_name}>Subscription: </span>
                        <input className={styles.field_value} value={user?.info} disabled={true}/>
                    </li>
                </ul>
            </div>
            <div className={styles.profile_settings}>
                <div>Change email</div>
                <div>Change password</div>
            </div>

        </div>
    );
};

export default Profile;
