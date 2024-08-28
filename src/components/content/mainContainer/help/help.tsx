import styles from "./help.module.sass";
import {FC} from "react";

const Help:FC = () => {
  return (
    <div className={styles.profile_container}>
      <div className={styles.profile_info}>
        Sorry, right now we don't support this page.
      </div>
    </div>
  );
};

export default Help;
