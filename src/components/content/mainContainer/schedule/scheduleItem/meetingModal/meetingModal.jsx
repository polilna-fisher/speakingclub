import styles from './meetingModal.module.css'
import MeetingImg from './bookMeetingModelImg.png'
import {styleDateTime} from "../../../../../../utils/dateCount";
import Button from "../../../../../button/button";
import {useSelector} from "react-redux";
import {bookPart} from "../../../../../../service/meetingService";

const MeetingModal = ({idPart}) => {
    const partList = useSelector(state => state.meetings.partsList)
    const part = partList.filter(part => part._id === idPart)[0]

    return (
        <div className={styles.container}>
            <h3 className={styles.header}>{part.topic}</h3>
            <div className={styles.subheader}>{part.type}</div>
            <div className={styles.content}>
                <ul className={styles.list}>
                    {
                        part.questions.map(item => {
                            return (
                                <li className={styles.list_item} key={Math.random()}>
                                    <div className={styles.list_icon}></div>
                                    <p>{item}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className={styles.book_content}>
                    <img src={MeetingImg} alt="img" className={styles.img}/>
                    <h3 className={styles.meeting_name}>{part.name}</h3>
                    <div className={styles.subheader}>{styleDateTime(part.dateTime)}</div>
                    <Button text={'Book now'} onClickFn={async () => {await bookPart(part, idPart)}}/>
                </div>
            </div>

        </div>
    )
}

export default MeetingModal;