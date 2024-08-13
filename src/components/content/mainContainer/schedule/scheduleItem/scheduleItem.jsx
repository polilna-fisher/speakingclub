import styles from "./scheduleItem.module.sass";
import ItemTime from "./itemTime/itemTime";
import ItemContent from "./itemContent/itemContent";
import cx from "classnames";
import {fromUtcToLocalTime} from "../../../../../utils/dateCount";

const ScheduleItem = ({ item, openModal }) => {
  const itemOlderThenNow = (dateTime) => {
    let currentDateTime = fromUtcToLocalTime(new Date().toJSON())
      return fromUtcToLocalTime(dateTime) < currentDateTime;
  };


  return (
    <div className={styles.item_container}>
      <ItemTime date={fromUtcToLocalTime(item.dateTime)} />
      <ItemContent item={item} openModal={openModal}/>
      <div
        className={cx([
          itemOlderThenNow(item.dateTime)
            ? styles.disabled_item
            : styles.hide_block,
        ])}
      ></div>
    </div>
  );
};

export default ScheduleItem;
