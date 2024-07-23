import styles from './scheduleContainer.module.css'
import ScheduleHeader from "../scheduleHeader/scheduleHeader";
import ScheduleItem from "../scheduleItem/scheduleItem";
import {useMemo, useState} from "react";
import moment from "moment";
import {dateFormats, formatDate} from "../../../../../utils/dateCount";
import {useSelector} from "react-redux";


const ScheduleContainer = () => {
    const [chosenDate, setChosenDate] = useState();

    const meetingsList = useSelector(state => state.meetings.meetingsList)
    const loading = useSelector(state => state.meetings.loadingMeetings)
    const error = useSelector(state => state.meetings.loadingMeetings)

    const meetingList = useMemo(() => {
        if(!!meetingsList.length){
            const forChosenDateData = meetingsList?.filter(el => {
                return (formatDate(el.dateTime, dateFormats.normal) === chosenDate)
            })
            return forChosenDateData.sort((a, b) => moment(a.date) - moment(b.date))
        }
    }, [meetingsList, chosenDate])


    return (
        <div>
            <ScheduleHeader getChosenDate={setChosenDate}/>
            <div className={styles.items_container}>
                {
                     meetingList?.map((item) => (<ScheduleItem
                        id={item._id}
                        key={item._id}/>))
                }
            </div>
        </div>
    )
}

export default ScheduleContainer;