import styles from './scheduleHeader.module.css'
import {countDate} from "../../../../../utils/dateCount";
import {useEffect, useState} from "react";

const ScheduleHeader = ({getChosenDate}) => {
    const [selectValue, setSelectValue] = useState();

    useEffect(() => {
        console.log(selectValue, 'selectValue')
        getChosenDate(selectValue);
    }, [selectValue]);

    return(
        <div className={styles.schedule_header}>
            <select className={styles.schedule_input} onClick={e => (setSelectValue(e.target.value))}>
                {countDate().map(el => (<option value={el.fullDate}>{el.day}, {el.month}, {el.date}</option>))}
            </select>
        </div>
    )
}

export default ScheduleHeader;