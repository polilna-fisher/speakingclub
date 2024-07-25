import styles from './bookedItem.module.css'
import {styleDateTime} from "../../../../utils/dateCount";

const BookedItem = ({key, name, type, color, topic, dateTime, questions}) => {
    return (

        <div className={styles.booked_item_container} style={{backgroundColor: color}} key={key}>
            <div className={styles.booked_item_text_container}>
                <h3 className={styles.booked_item_name}>{name}</h3>
                <h3 className={styles.booked_item_type}>{type}</h3>
                <div className={styles.booked_item_date}>{styleDateTime(dateTime)}</div>
                <div
                    className={styles.booked_item_date}>{dateTime.split('T')[1].substring(0, 5)}</div>
            </div>
        </div>
    )
}

export default BookedItem;