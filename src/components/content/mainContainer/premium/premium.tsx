import styles from "./premium.module.sass";
import PremiumItem from "./premiumItem/premiumItem";
import {FC} from "react";

const Premium:FC = () => {
  return (
    <div className={styles.premium_container}>
      <div className={styles.premium_items_container}>
        <PremiumItem />
      </div>
    </div>
  );
};

export default Premium;
