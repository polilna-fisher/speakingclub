import styles from './itemContent.module.css'
import Modal from "../../../../../modal/modal";
import {useState} from "react";
import MeetingModal from "../meetingModal/meetingModal";

const ItemContent = ({date, type, name, host, hostIcon, topic1, topic2, questions2, questions1}) => {
    const [modal, setModal] = useState(null)
    const modals = {
        Part1: <MeetingModal type={type} topic={topic1} questions={questions1} date={date} name={name}/>,
        Part2: <MeetingModal type={type} topic={topic2} questions={questions2} date={date} name={name}/>
    }

    return(
        <div className={styles.item_container}>
            <div className={styles.host_container}>
                <img alt={'hostIcon'} src={hostIcon} className={styles.host_icon}/>
                <div className={styles.host_name}>{host}</div>
            </div>
            <div className={styles.meeting_name_container}>
                <div className={styles.meeting_type}>{type}</div>
                <div className={styles.meeting_name}>{name}</div>
            </div>
            <div className={styles.meeting_button_container}>
                <button className={styles.meeting_button} onClick={() => setModal('Part1')}>Part 1</button>
                <button className={styles.meeting_button} onClick={() => setModal('Part2')}>Part 2</button>
            </div>

            <Modal modal={!!modal} setModal={() => setModal(null)}>
                {modals[modal]}
            </Modal>
        </div>
    )
}

export default ItemContent;