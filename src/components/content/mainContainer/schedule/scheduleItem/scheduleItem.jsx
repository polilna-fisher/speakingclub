import styles from "./scheduleItem.module.css";
import ItemTime from "./itemTime/itemTime";
import ItemContent from "./itemContent/itemContent";
import cx from "classnames";

const ScheduleItem = ({ item, openModal }) => {
  const itemOlderThenNow = (dateTime) => {
    let currentDateTime = new Date().toJSON();
    return dateTime < currentDateTime;
  };

  return (
    <div className={styles.item_container}>
      <ItemTime date={item.dateTime} />
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
