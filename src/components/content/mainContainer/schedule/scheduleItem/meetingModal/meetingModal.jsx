import styles from './meetingModal.module.css'
import MeetingImg from './bookMeetingModelImg.png'


const MeetingModal = ({type, topic, questions, name, date}) => {

    const styleDateTime = (date) => {
        //2024-06-29T06:00:00.000Z
        const month = date.toLocaleString('EN', { month: 'long' })
        const calendarDay = String(date.getDate()).length === 1 ? `0${String(date.getDate())}`: String(date.getDate())
        const weekDay = daysName[date.getDay()]

    }

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
                    <h3 className={styles.subheader}>{name}</h3>
                    <div>{date}</div>
                    <button>Book</button>
                </div>
            </div>

        </div>
    )
}

export default MeetingModal;