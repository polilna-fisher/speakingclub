import styles from "./bookedItem.module.sass";
import { styleDateTime } from "../../../../utils/dateCount";
import cx from "classnames";

const BookedItem = ({ item, color, openModal }) => {
  const itemOlderThenNow = (dateTime) => {
    let currentDateTime = new Date().toJSON();
    return dateTime < currentDateTime;
  };

  return (
    <div
      className={cx([
        styles.booked_item_container,
        itemOlderThenNow(item.dateTime) && styles.expired_item,
      ])}
      style={{ backgroundColor: color }}
      onClick={() => openModal({type: "Part", data: {...item}})}
    >
      <div className={styles.booked_item_text_container}>
        <h3 className={styles.booked_item_name}>{item.name}</h3>
        <h3 className={styles.booked_item_type}>{item.type}</h3>
        <div className={styles.booked_item_date}>
          {styleDateTime(item.dateTime)}
        </div>
        <div className={styles.booked_item_date}>
          {item.dateTime.split("T")[1].substring(0, 5)}
        </div>
      </div>
    </div>
  );
};

export default BookedItem;
