import styles from "./infoblock.module.sass";
import {FC} from "react";

const RateBlock:FC = () => {
  return (
    <div className={styles.infoblock_container}>
      50% OFF ALL MEMBERSHIPS for members living in Serbia. Your country is
      currently under-represented on the platform. We need more members from
      your country to make these meetings truly a cultural experience.
    </div>
  );
};

export default RateBlock;
