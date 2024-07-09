import styles from './bookedItem.module.css'
import {styleDateTime} from "../../../../utils/dateCount";
import Button from "../../../button/button";

const BookedItem = ({name, type, color, part1, part2}) => {



    return (
        !!part1.booked
            ? <div className={styles.booked_item_container} style={{backgroundColor: color}}>
                <div className={styles.booked_item_text_container}>
                    <h3 className={styles.booked_item_name}>{name}</h3>
                    <h3 className={styles.booked_item_type}>{type}</h3>
                    <div className={styles.booked_item_date}>{styleDateTime(part1.dateTime)}</div>
                    <div className={styles.booked_item_date}>{part1.dateTime.split('T')[1].substring(0, 5)}</div>
                </div>
            </div>
            : null,

        !!part2.booked
            ? <div className={styles.booked_item_container} style={{backgroundColor: color}}>
                <div className={styles.booked_item_text_container}>
                    <h3 className={styles.booked_item_name}>{name}</h3>
                    <h3 className={styles.booked_item_type}>{type}</h3>
                    <div className={styles.booked_item_date}>{styleDateTime(part2.dateTime)}</div>
                    <div className={styles.booked_item_date}>{part2.dateTime.split('T')[1].substring(0, 5)}</div>
                </div>
            </div>
            : null

    )
}

export default BookedItem;