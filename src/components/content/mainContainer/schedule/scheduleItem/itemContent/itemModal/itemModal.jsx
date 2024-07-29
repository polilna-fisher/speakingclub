import styles from './itemModal.module.css'
import {bookPart} from "../../../../../../../service/meetingService";
import {styleDateTime} from "../../../../../../../utils/dateCount";
import Button from "../../../../../../button/button";
import {useSelector} from "react-redux";


const ItemModal = ({idParts}) => {
    const partList = useSelector(state => state.meetings.partsList)
    const part1 = partList.filter(part => part._id === idParts[0])[0]
    const part2 = partList.filter(part => part._id === idParts[1])[0]


    return (
        <div className={styles.container}>
            <h3 className={styles.header}>Part1</h3>
            <h3 className={styles.meeting_name}>{part1.name}</h3>
            <div className={styles.subheader}>{styleDateTime(part1.dateTime)}</div>
            <h3 className={styles.header}>{part1.topic}</h3>
            <div className={styles.subheader}>{part1.type}</div>
            <div>
                <ul className={styles.list}>
                    {
                        part1.questions.map(item => {
                            return (
                                <li className={styles.list_item} key={Math.random()}>
                                    <div className={styles.list_icon}></div>
                                    <p>{item}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <Button text={'Book now'} onClickFn={async () => {
                    await bookPart(part1, idParts[0])
                }}/>
            </div>

            <h3 className={styles.header}>Part2</h3>
            <h3 className={styles.meeting_name}>{part2.name}</h3>
            <div className={styles.subheader}>{styleDateTime(part2.dateTime)}</div>
            <h3 className={styles.header}>{part2.topic}</h3>
            <div className={styles.subheader}>{part2.type}</div>

            <div>

                <ul className={styles.list}>
                    {
                        part2.questions.map(item => {
                            return (
                                <li className={styles.list_item} key={Math.random()}>
                                    <div className={styles.list_icon}></div>
                                    <p>{item}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <Button text={'Book now'} onClickFn={async () => {
                    await bookPart(part2, idParts[0])
                }}/>
            </div>


        </div>
    )
}

export default ItemModal;