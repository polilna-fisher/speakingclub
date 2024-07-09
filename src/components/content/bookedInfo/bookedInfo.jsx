import styles from './bookedInfo.module.css'
import BookedItem from "./bookedItem/bookedItem";
import {useEffect, useState} from "react";

const BookedInfo = () => {

    const [bookedItems, setBookedItems] = useState([]);
    const colors = ["#FFCACC", "#D4E2D4"]

    const getBookedItems = async () => {
        const response = await fetch('http://localhost:5000/api/getAll')
        const data = await response.json()
        const bookedItems = data?.filter(item => !!item.part1.booked || !!item.part2.booked)
        setBookedItems(bookedItems)
    }

    useEffect(() => {
        getBookedItems()
    }, []);

    return(
        <div className={styles.booked_info_container}>
            {!bookedItems.length
                ? <div className={styles.booked_info_no_items_container}>
                    <div className={styles.booked_info_no_items_text}>Book your first meeting</div>
                </div>
                : (bookedItems?.map((bookedItem, i) => {
                return(
                    <BookedItem key={bookedItem._id}
                                part1={bookedItem.part1}
                                part2={bookedItem.part2}
                                name={bookedItem.name}
                                color={i % 2 === 0 || 0 ? '#FFCACC' : '#D4E2D4'}
                                type={bookedItem.type}/>
                )
            }))}

        </div>
    )
}

export default BookedInfo;