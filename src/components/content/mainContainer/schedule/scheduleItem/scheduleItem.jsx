import styles from './scheduleItem.module.css'
import ItemTime from "./itemTime/itemTime";
import ItemContent from "./itemContent/itemContent";

const ScheduleItem = ({id, dateTime, type, name, host, hostIcon, part1, part2}) => {
    return(
        <div className={styles.item_container} key={id}>
            <ItemTime date={dateTime} />
            <ItemContent
                id={id}
                type={type}
                name={name}
                host={host}
                hostIcon={hostIcon}
                dateTime={dateTime}
                part1={part1}
                part2={part2}/>
        </div>
    )
}

export default ScheduleItem;