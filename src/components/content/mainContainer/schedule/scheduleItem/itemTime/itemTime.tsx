import styles from "./itemTime.module.sass";
import {FC} from "react";

interface IItemTime {
    date: string;
}

const ItemTime:FC<IItemTime> = ({ date }) => {
  return (
    <div className={styles.item_container}>
      {date.split("T")[1].substring(0, 5)}
    </div>
  );
};

export default ItemTime;
