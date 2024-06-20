import styles from './bookedItem.module.css'

const BookedItem = () => {
    return(
        <div className={styles.booked_item_container}>
            <div className={styles.booked_item_text_container}>
                <h3 className={styles.booked_item_name}>What's your fav film?</h3>
                <div className={styles.booked_item_date}>03.05.2024, Monday</div>
                <h3 className={styles.booked_item_type}>Speaking session</h3>
            </div>

            <button className={styles.booked_item_button}>Details</button>
        </div>
    )
}

export default BookedItem;