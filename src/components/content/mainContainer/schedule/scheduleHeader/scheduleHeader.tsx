import styles from "./scheduleHeader.module.sass";
import {
  countDate,
  dateFormats,
  formatDate,
} from "../../../../../utils/dateCount";
import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";

interface IScheduleHeader {
    setChosenDate: Dispatch<SetStateAction<any>>
}
const ScheduleHeader:FC<IScheduleHeader> = ({ setChosenDate }) => {
  const [selectValue, setSelectValue] = useState(
    formatDate(new Date(), dateFormats.normal),
  );

  useEffect(() => {
      setChosenDate(selectValue);
  }, [setChosenDate, selectValue]);

  return (
    <div className={styles.schedule_header}>
      <select
        className={styles.schedule_input}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        {countDate().map((el) => (
          <option key={el.fullDate} value={el.fullDate}>
            {el.month}, {el.date} {el.day}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ScheduleHeader;
