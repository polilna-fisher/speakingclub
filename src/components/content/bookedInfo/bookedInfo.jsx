import styles from './bookedInfo.module.css'
import BookedItem from "./bookedItem/bookedItem";
import {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {meetingActions} from "../../../redux/slice";


const BookedInfo = () => {
    const meetingsList = useSelector(state => state.meetings.meetingsList)
    const partList = useSelector(state => state.meetings.partsList)
    const loading = useSelector(state => state.meetings.loadingParts)
    const error = useSelector(state => state.meetings.errorParts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(meetingActions.fetchMeetingsList())
        dispatch(meetingActions.fetchPartsList())
    }, []);


    const bookedItemsList = useMemo(() => {
        if(!!partList.length){
            const bookedItems = partList.filter(item => !!item.booked
                && item.dateTime > new Date().toJSON())
            return bookedItems

        }
    }, [partList])

    return(
        <div className={styles.booked_info_container}>

            {!bookedItemsList?.length
                ? <div className={styles.booked_info_no_items_container}>
                    <div className={styles.booked_info_no_items_text}>Book your first meeting</div>
                </div>
                : (bookedItemsList?.map((bookedItem, i) => {
                        return(
                            <BookedItem key={bookedItem._id}
                                        dateTime={bookedItem.dateTime}
                                        topic={bookedItem.topic}
                                        questions={bookedItem.questions}
                                        name={bookedItem.name}
                                        color={i % 2 === 0 || 0 ? '#FFCACC' : '#D4E2D4'}
                                        type={bookedItem.type}/>
                        )
            }))}
        </div>
    )
}

export default BookedInfo;