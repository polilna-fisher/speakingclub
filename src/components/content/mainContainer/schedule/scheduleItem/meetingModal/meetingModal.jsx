import styles from './meetingModal.module.css'
import MeetingImg from './bookMeetingModelImg.png'
import {styleDateTime} from "../../../../../../utils/dateCount";
import Button from "../../../../../button/button";


const MeetingModal = ({type, topic, questions, name, date}) => {

    return (
        <div className={styles.container}>
            <h3 className={styles.header}>{topic}</h3>
            <div className={styles.subheader}>{type}</div>
            <div className={styles.content}>
                <ul className={styles.list}>
                    {
                        questions.map(item => {
                            return (
                                <li className={styles.list_item}>
                                    <div className={styles.list_icon}></div>
                                    <p>{item}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className={styles.book_content}>
                    <img src={MeetingImg} alt="img" className={styles.img}/>
                    <h3 className={styles.meeting_name}>{name}</h3>
                    <div className={styles.subheader}>{styleDateTime(date)}</div>
                    <Button text={'Book now'}/>
                </div>
            </div>

        </div>
    )
}

export default MeetingModal;