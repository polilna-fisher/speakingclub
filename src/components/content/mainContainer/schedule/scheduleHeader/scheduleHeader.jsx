import styles from './scheduleHeader.module.css'
import {countDate} from "../../../../../utils/dateCount";
import {useEffect, useState} from "react";

const ScheduleHeader = ({getChosenDate}) => {
    const [selectValue, setSelectValue] = useState();

    useEffect(() => {
        getChosenDate(selectValue);
    }, [selectValue]);

    return(
        <div className={styles.schedule_header}>
            {/*<h3 className={styles.schedule_day}>{getToday()}</h3>*/}
            <select className={styles.schedule_input} onClick={e => (setSelectValue(e.target.value))}>
                {countDate().map(el => (<option value={el.date}>{el.day}, {el.date}</option>))}
            </select>
            {/*<input type={'date'} defaultValue={new Date().toLocaleDateString().split('.').reverse().join('-')} className={styles.schedule_input}/>*/}
        </div>
    )
}

export default ScheduleHeader;