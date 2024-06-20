import styles from './bookedInfo.module.css'
import BookedItem from "./bookedItem/bookedItem";

const BookedInfo = () => {
    return(
        <div className={styles.booked_info_container}>
            <BookedItem/>
            <BookedItem/>
            <BookedItem/>
        </div>
    )
}

export default BookedInfo;