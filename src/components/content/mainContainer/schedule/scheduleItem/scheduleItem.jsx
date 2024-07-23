import styles from './scheduleItem.module.css'
import ItemTime from "./itemTime/itemTime";
import ItemContent from "./itemContent/itemContent";
import {useSelector} from "react-redux";

const ScheduleItem = ({id}) => {
    const meetingsList = useSelector(state => state.meetings.meetingsList)
    const dateTime = meetingsList.filter(meeting => meeting._id === id)[0].dateTime
    const idParts = meetingsList.filter(meeting => meeting._id === id)[0].idParts

    return(
        <div className={styles.item_container} key={id}>
            <ItemTime date={dateTime} />
            <ItemContent
                idMeeting={id}
                idParts={idParts}/>
        </div>
    )
}

export default ScheduleItem;