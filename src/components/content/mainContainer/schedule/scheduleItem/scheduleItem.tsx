import styles from "./scheduleItem.module.sass";
import ItemTime from "./itemTime/itemTime";
import ItemContent from "./itemContent/itemContent";
import cx from "classnames";
import {fromUtcToLocalTime} from "../../../../../utils/dateCount";
import {FC} from "react";
import {IMeeting} from "../../../../../models/IMeeting";
import {IPart} from "../../../../../models/IPart";

interface IScheduleItem {
    item: IMeeting,
    openModal: (info: { type: string; data: IPart | IPart[] }) => void,
}

const ScheduleItem:FC<IScheduleItem> = ({ item, openModal }) => {
  const itemOlderThenNow = (dateTime: string):boolean => {
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
