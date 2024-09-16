import styles from "./notFound.module.sass";
import {FC} from "react";

const NotFound: FC = () => {
  return (
    <div className={styles.profile_container}>
      <div className={styles.profile_info}>Sorry, this page hasn't found</div>
    </div>
  );
};

export default NotFound;
