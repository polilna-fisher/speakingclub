import styles from "./header.module.sass";
import {FC} from "react";

const Header:FC = () => {
  return (
    <div className={styles.header_container}>
      <h1 className={styles.header}> SPEAKING CLUB</h1>
    </div>
  );
};

export default Header;
