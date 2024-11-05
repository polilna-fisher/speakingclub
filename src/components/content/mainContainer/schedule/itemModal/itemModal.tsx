import styles from "./itemModal.module.sass";
import {fromUtcToLocalTime, styleDateTime} from "../../../../../utils/dateCount";
import Button from "../../../../button/button";
import {IPart} from "../../../../../models/IPart";
import {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../../../../redux/store";
import {userActions} from "../../../../../redux/userSlice";

interface IItemModal {
  parts: IPart[]
}

const ItemModal:FC<IItemModal> = ({parts}) => {
  const part1 = parts[0]
  const part2 = parts[1]
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user.user)
  const userId = user?.id
  const bookedParts = user?.bookedParts
  const loadingBooking = useAppSelector(state => state.user.loadingBooking)
  const errorBooking = useAppSelector(state => state.user.errorBooking)
  const partStatus1 = bookedParts?.find(partId => partId === part1?._id)
  const partStatus2 = bookedParts?.find(partId => partId === part2?._id)


  const bookingPart = async (partId: string | undefined) => {
    dispatch(userActions.fetchBookingPart({partId, userId}))
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
            text={(loadingBooking && "Loading...") || (errorBooking && "Try again") || (partStatus1 ? "Cancel" : "Book now")}
          onClickFn={() => bookingPart(part1._id)}
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
            text={(loadingBooking && "Loading...") || (errorBooking && "Try again") || (partStatus2 ? "Cancel" : "Book now")}
          onClickFn={() => bookingPart(part2._id)}
        />
      </div>
    </div>
  );
};

export default ItemModal;
