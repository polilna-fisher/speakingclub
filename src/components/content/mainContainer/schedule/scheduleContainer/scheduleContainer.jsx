import styles from './scheduleContainer.module.css'
import ScheduleHeader from "../scheduleHeader/scheduleHeader";
import ScheduleItem from "../scheduleItem/scheduleItem";
import {useEffect, useMemo, useState} from "react";
import moment from "moment";
import {dateFormats, formatDate} from "../../../../../utils/dateCount";


const ScheduleContainer = () => {
    const [data, setData] = useState([]);
    const [chosenDate, setChosenDate] = useState();
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        const response = await fetch('http://localhost:5000/api/getAll')
        return await response.json();
    }

    const meetingList = useMemo(() => {
        const forChosenDateData = data?.filter(el => {
            return (formatDate(el.date, dateFormats.normal) === chosenDate)
        })
        return forChosenDateData.sort((a, b) => moment(a.date) - moment(b.date))
    }, [data, chosenDate])

    useEffect(() => {
        fetchData()
            .then(data => setData(data))
            .catch()
            .finally(() => {
                setLoading(false)
            })
    }, []);


    return (
        <div>
            <ScheduleHeader getChosenDate={setChosenDate}/>
            <div className={styles.items_container}>
                {
                     meetingList.map((item) => (<ScheduleItem
                        id={item._id}
                        key={item._id}
                        dateTime={item.dateTime}
                        type={item.type}
                        name={item.name}
                        host={item.host}
                        hostIcon={item.hostIcon}
                        part2={item.part2}
                        part1={item.part1}/>))
                }
            </div>
        </div>
    )
}

export default ScheduleContainer;