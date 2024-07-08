import styles from './meetingModal.module.css'
import MeetingImg from './bookMeetingModelImg.png'
import {styleDateTime} from "../../../../../../utils/dateCount";
import Button from "../../../../../button/button";
import {useState} from "react";
import Modal from "../../../../../modal/modal";
import PurchaseModal from "../../../premium/purchaseModal/purchaseModal";


const MeetingModal = ({id, type, topic, questions, name, date}) => {

    const bookItem = async () => {
        const response = await fetch(`http://localhost:5000/api/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ booked: true }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return  await response.json()

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
                                <li className={styles.list_item} key={item}>
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
                    <Button text={'Book now'} onClickFn={async () => {bookItem()}}/>
                </div>
            </div>

        </div>
    )
}

export default MeetingModal;