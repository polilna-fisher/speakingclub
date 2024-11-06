import styles from "./premium.module.sass";
import PremiumItem from "./premiumItem/premiumItem";
import {FC} from "react";
import premiumItemsInfo from "./premiumItem/premiunItemInfo";

const Premium:FC = () => {
  return (
    <div className={styles.premium_container}>
      <div className={styles.premium_items_container}>
          {premiumItemsInfo.map((el) => {
             return <PremiumItem key={el.title} premiumItem={el} />
          })}

      </div>
    </div>
  );
};

export default Premium;
