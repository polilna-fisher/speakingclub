import styles from "./profile.module.sass";
import {FC} from "react";

const Profile:FC = () => {
  return (
    <div className={styles.profile_container}>
      <div className={styles.profile_info}>
        Sorry, right now we don't support accounts. Try to check later. If you
        faced the problems, please, write to our support manager
      </div>
    </div>
  );
};

export default Profile;
