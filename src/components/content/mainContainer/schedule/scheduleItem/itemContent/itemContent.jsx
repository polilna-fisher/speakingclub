import styles from './itemContent.module.css'
import Modal from "../../../../../modal/modal";
import {useState} from "react";
import MeetingModal from "../meetingModal/meetingModal";
import {useSelector} from "react-redux";

const ItemContent = ({idParts, idMeeting}) => {
    const [modal, setModal] = useState(null)
    const meetingsList = useSelector(state => state.meetings.meetingsList)
    const meeting = meetingsList.filter(meeting => meeting._id === idMeeting)[0]

    const modalMeeting = {
        Part1: <MeetingModal idPart={idParts[0]}/>,
        Part2: <MeetingModal idPart={idParts[1]}/>
    }

    return(
        <div className={styles.item_container}>
            <div className={styles.host_container}>
                <img alt={'hostIcon'} src={meeting.hostIcon} className={styles.host_icon}/>
                <div className={styles.host_name}>{meeting.host}</div>
            </div>
            <div className={styles.meeting_name_container}>
                <div className={styles.meeting_type}>{meeting.type}</div>
                <div className={styles.meeting_name}>{meeting.name}</div>
            </div>
            <div className={styles.meeting_button_container}>
                <button className={styles.meeting_button} onClick={() => setModal('Part1')}>Part 1</button>
                <button className={styles.meeting_button} onClick={() => setModal('Part2')}>Part 2</button>
            </div>

            <Modal modal={!!modal} setModal={() => setModal(null)}>
                {modalMeeting[modal]}
            </Modal>
        </div>
    )
}

export default ItemContent;