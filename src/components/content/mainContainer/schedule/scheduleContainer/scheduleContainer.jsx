import styles from './scheduleContainer.module.css'
import ScheduleHeader from "../scheduleHeader/scheduleHeader";
import ScheduleItem from "../scheduleItem/scheduleItem";
import {useEffect, useState} from "react";
import moment from "moment";


const ScheduleContainer = () => {

    const [meetingList, setMeetingList] = useState([]);
    const [chosenDate, setChosenDate] = useState(new Date().toLocaleDateString());

    async function fetchData (date= new Date().toLocaleDateString()) {
        const response = await fetch('http://localhost:5000/api/getAll')
        const data = await response.json();
        const todayData = data.filter(el =>
            (moment(el.date).format("DD.MM.YYYY") === date))
        setMeetingList(todayData.sort((a, b) => moment(a.date) - moment(b.date)))
    }

    useEffect( () => {
        fetchData()
    }, []);
    useEffect( () => {
        fetchData(chosenDate)
    }, [chosenDate]);

    const getChosenDate = (date) => {
        setChosenDate(date)
    }



    return(
        <div>
            <ScheduleHeader getChosenDate={getChosenDate}/>
            <div className={styles.items_container}>
                {
                    meetingList.map((item) => (<ScheduleItem
                        id={item._id}
                        key={item._id}
                        date={item.date}
                        type={item.type}
                        name={item.name}
                        host={item.host}
                        hostIcon={item.hostIcon}
                        topic1={item.topic1}
                        questions1={item.questions1}
                        topic2={item.topic2}
                        questions2={item.questions2} />))
                }
            </div>
        </div>
    )
}

export default ScheduleContainer;