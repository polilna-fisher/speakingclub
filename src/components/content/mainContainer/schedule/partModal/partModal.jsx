import styles from "./partModal.module.css";
import MeetingImg from "./partModelImg.png";
import { styleDateTime } from "../../../../../utils/dateCount";
import Button from "../../../../button/button";
import { bookPart } from "../../../../../service/meetingService";
import {partActions} from "../../../../../redux/partSlice";
import {useDispatch} from "react-redux";

const PartModal = ({ part }) => {
    const dispatch = useDispatch()

    const bookingPart = async (id, isBooked) => {
        dispatch(partActions.fetchBookingPart({id, isBooked}))
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{part.topic}</h3>
      <div className={styles.subheader}>{part.type}</div>
      <div className={styles.content}>
        <ul className={styles.list}>
          {part.questions.map((item) => {
            return (
              <li className={styles.list_item} key={Math.random()}>
                <div className={styles.list_icon}></div>
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
        <div className={styles.book_content}>
          <img src={MeetingImg} alt="img" className={styles.img} />
          <h3 className={styles.meeting_name}>{part.name}</h3>
          <div className={styles.subheader}>{styleDateTime(part.dateTime)}</div>
          <Button
              text={part.booked ? "Cancel" : "Book now"}
            onClickFn={() => bookingPart(part._id, part.booked)}
          />
        </div>
      </div>
    </div>
  );
};

export default PartModal;
