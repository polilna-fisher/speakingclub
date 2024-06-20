import styles from './scheduleItem.module.css'
import ItemTime from "./itemTime/itemTime";
import ItemContent from "./itemContent/itemContent";

const ScheduleItem = ({key, date, type, name, host, hostIcon, topic1, questions1, topic2, questions2}) => {
    return(
        <div className={styles.item_container} key={key}>
            <ItemTime date={date}  />
            <ItemContent
                type={type}
                name={name}
                host={host}
                hostIcon={hostIcon}
                topic1={topic1}
                questions1={questions1}
                topic2={topic2}
                questions2={questions2} />
        </div>
    )
}

export default ScheduleItem;