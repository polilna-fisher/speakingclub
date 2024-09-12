import styles from "./partModal.module.sass";
import MeetingImg from "./partModelImg.png";
import {fromUtcToLocalTime, styleDateTime} from "../../../../../utils/dateCount";
import Button from "../../../../button/button";
import {partActions} from "../../../../../redux/partSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const PartModal = ({ part }) => {
    const dispatch = useDispatch()
    const loadingBooking = useSelector(state => state.parts.loadingBooking)
    const errorBooking = useSelector(state => state.parts.errorBooking)
    const bookedParts = useSelector(state => state.parts.bookedParts)
    const currentPart = bookedParts.find(item => item._id === part._id)
    const partStatus = !!currentPart ? currentPart.booked : false

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
          <div className={styles.subheader}>{styleDateTime(fromUtcToLocalTime(part.dateTime))}</div>
          <Button
              // text={partStatus ? "Cancel" : "Book now"}
              text={(loadingBooking && "Loading..." )|| (errorBooking && "Try again") || (partStatus ? "Cancel" : "Book now")}
            onClickFn={() => bookingPart(part._id, partStatus)}
          />
        </div>
      </div>
    </div>
  );
};

export default PartModal;
