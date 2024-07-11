import styles from './itemContent.module.css'
import Modal from "../../../../../modal/modal";
import {useState} from "react";
import MeetingModal from "../meetingModal/meetingModal";

const ItemContent = ({id, dateTime, type, name, host, hostIcon, part1, part2}) => {
    const [modal, setModal] = useState(null)
    const modals = {
        Part1: <MeetingModal type={type} topic={part1.topic} questions={part1.questions} date={dateTime} name={name} id={id} part={part1}/>,
        Part2: <MeetingModal type={type} topic={part2.topic} questions={part2.questions} date={dateTime} name={name} id={id} part={part2}/>
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