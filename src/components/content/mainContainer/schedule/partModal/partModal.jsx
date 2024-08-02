import styles from "./partModal.module.css";
import MeetingImg from "./partModelImg.png";
import { styleDateTime } from "../../../../../utils/dateCount";
import Button from "../../../../button/button";
import { bookPart } from "../../../../../service/meetingService";

const PartModal = ({ part }) => {

    const bookingPart = async (id, status) => {
    const fetchBooking = await bookPart(id, status);
    return fetchBooking;
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
            text={"Book now"}
            onClickFn={() => bookingPart(part._id, true)}
          />
        </div>
      </div>
    </div>
  );
};

export default PartModal;
