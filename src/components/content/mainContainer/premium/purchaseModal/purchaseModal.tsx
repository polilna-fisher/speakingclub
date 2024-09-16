import styles from "./purchaseModal.module.sass";
import {FC} from "react";

const PurchaseModal:FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.premium_info}>
        Our website is under development, so now you can use it absolutely for
        free. If you have difficulties working with our site, please go to the
        Help section and tell us about your problem.
      </div>
    </div>
  );
};

export default PurchaseModal;
