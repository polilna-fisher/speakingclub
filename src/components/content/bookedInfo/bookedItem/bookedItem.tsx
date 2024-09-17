import styles from "./bookedItem.module.sass";
import {fromUtcToLocalTime, styleDateTime} from "../../../../utils/dateCount";
import cx from "classnames";
import {IPart} from "../../../../models/IPart";
import {FC} from "react";

interface IBookedItem {
    item: IPart,
    color: string,
    openModal: ({}) => void,
}

const BookedItem:FC<IBookedItem> = ({ item, color, openModal }) => {

  const itemOlderThenNow = (dateTime:string):boolean => {
      let currentDateTime = fromUtcToLocalTime(new Date().toJSON())
      return fromUtcToLocalTime(dateTime) < currentDateTime;
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
          {styleDateTime(fromUtcToLocalTime(item.dateTime))}
        </div>
        <div className={styles.booked_item_date}>
          {fromUtcToLocalTime(item.dateTime).split("T")[1].substring(0, 5)}
        </div>
      </div>
    </div>
  );
};

export default BookedItem;
