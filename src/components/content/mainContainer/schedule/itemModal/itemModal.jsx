import styles from "./itemModal.module.css";
import { styleDateTime } from "../../../../../utils/dateCount";
import Button from "../../../../button/button";
import {useDispatch} from "react-redux";
import {partActions} from "../../../../../redux/partSlice";

const ItemModal = ({parts}) => {
  const part1 = parts[0]
  const part2 = parts[1]
  const dispatch = useDispatch()

  const bookingPart = async (id, isBooked) => {
    dispatch(partActions.fetchBookingPart({id, isBooked}))
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
            text={part1.booked ? "Cancel" : "Book now"}
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
            text={part2.booked ? "Cancel" : "Book now"}
          onClickFn={() => bookingPart(part2._id, true)}
        />
      </div>
    </div>
  );
};

export default ItemModal;
