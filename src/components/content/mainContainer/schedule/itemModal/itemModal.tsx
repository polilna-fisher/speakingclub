import styles from "./itemModal.module.sass";
import {fromUtcToLocalTime, styleDateTime} from "../../../../../utils/dateCount";
import Button from "../../../../button/button";
import {partActions} from "../../../../../redux/partSlice";
import {IPart} from "../../../../../models/IPart";
import {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../../../../redux/store";

interface IItemModal {
  parts: IPart[]
}

const ItemModal:FC<IItemModal> = ({parts}) => {
  const part1 = parts[0]
  const part2 = parts[1]
  const dispatch = useAppDispatch()
  const loadingBooking = useAppSelector(state => state.parts.loadingBooking)
  const errorBooking = useAppSelector(state => state.parts.errorBooking)
  const bookedParts = useAppSelector(state => state.parts.bookedParts)
  const currentPart1 = !!bookedParts.find(item => item._id === part1._id)
  const currentPart2 = !!bookedParts.find(item => item._id === part2._id)
  console.log(currentPart1, currentPart2, 'twwerewedcxzxc')
  const part1Status = true
  const part2Status = true


  const bookingPart = async (id: string | undefined, isBooked: any) => {
    dispatch(partActions.fetchBookingPart({id, isBooked}))
  };

  return (
    <div className={styles.container}>
      <div className={styles.part_container}>
        <h3 className={styles.meeting_name}>Part 1</h3>
        <h3 className={styles.header}>{part1.topic}</h3>
        <div className={styles.subheader}>{styleDateTime(fromUtcToLocalTime(part1.dateTime))}</div>
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
            text={(loadingBooking && "Loading...") || (errorBooking && "Try again") || (part1Status ? "Cancel" : "Book now")}
          onClickFn={() => bookingPart(part1._id, part1Status)}
        />
      </div>

      <div className={styles.part_container}>
        <h3 className={styles.meeting_name}>Part 2</h3>
        <h3 className={styles.header}>{part2.topic}</h3>
        <div className={styles.subheader}>{styleDateTime(fromUtcToLocalTime(part2.dateTime))}</div>
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
            text={(loadingBooking && "Loading...") || (errorBooking && "Try again") || (part2Status ? "Cancel" : "Book now")}
          onClickFn={() => bookingPart(part2._id, part2Status)}
        />
      </div>
    </div>
  );
};

export default ItemModal;
