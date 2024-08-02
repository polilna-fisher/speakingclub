import styles from "./itemModal.module.css";
import { bookPart } from "../../../../../service/meetingService";
import { styleDateTime } from "../../../../../utils/dateCount";
import Button from "../../../../button/button";

const ItemModal = ({parts}) => {
  const part1 = parts[0]
  const part2 = parts[1]
  const bookingPart = async (id, status) => {
    const fetchBooking = await bookPart(id, status);
    return fetchBooking;
  };

  return (
    <div className={styles.container}>
      <div className={styles.part_container}>
        <h3 className={styles.meeting_name}>Part 1</h3>
        <h3 className={styles.header}>{part1.topic}</h3>
        <div className={styles.subheader}>{styleDateTime(part1.dateTime)}</div>
        <div>
          <ul className={styles.list}>
            {part1.questions.map((item) => {
              return (
                <li className={styles.list_item} key={Math.random()}>
                  <div className={styles.list_icon}></div>
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <Button
          text={"Book now"}
          onClickFn={() => bookingPart(part1._id, true)}
        />
      </div>

      <div className={styles.part_container}>
        <h3 className={styles.meeting_name}>Part 2</h3>
        <h3 className={styles.header}>{part2.topic}</h3>
        <div className={styles.subheader}>{styleDateTime(part2.dateTime)}</div>
        <div>
          <ul className={styles.list}>
            {part2.questions.map((item) => {
              return (
                <li className={styles.list_item} key={Math.random()}>
                  <div className={styles.list_icon}></div>
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <Button
          text={"Book now"}
          onClickFn={() => bookingPart(part2._id, true)}
        />
      </div>
    </div>
  );
};

export default ItemModal;
