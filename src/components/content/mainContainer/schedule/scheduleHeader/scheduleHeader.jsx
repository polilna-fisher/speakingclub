import styles from './scheduleHeader.module.css'
import {countDate, dateFormats, formatDate} from "../../../../../utils/dateCount";
import {useEffect, useState} from "react";

const ScheduleHeader = ({getChosenDate}) => {
    const [selectValue, setSelectValue] = useState(formatDate(new Date(), dateFormats.normal));

    useEffect(() => {
        getChosenDate(selectValue);
    }, [selectValue]);

    return(
        <div className={styles.schedule_header}>
            <select className={styles.schedule_input} onClick={e => (setSelectValue(e.target.value))}>
                {countDate().map(el => (<option key={el.fullDate} value={el.fullDate}>{el.month}, {el.date} {el.day}</option>))}
            </select>
        </div>
    )
}

export default ScheduleHeader;