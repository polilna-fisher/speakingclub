import styles from "./scheduleContainer.module.css";
import ScheduleHeader from "../scheduleHeader/scheduleHeader";
import ScheduleItem from "../scheduleItem/scheduleItem";
import {useEffect, useMemo, useState} from "react";
import moment from "moment";
import {dateFormats, formatDate, fromUtcToLocalTime} from "../../../../../utils/dateCount";
import { useSelector } from "react-redux";
import PartModal from "../partModal/partModal";
import ItemModal from "../itemModal/itemModal";
import Modal from "../../../../modal/modal";

const ScheduleContainer = () => {
  const [chosenDate, setChosenDate] = useState();

  const meetingsList = useSelector((state) => state.meetings.meetingsList);
  const loading = useSelector((state) => state.meetings.loadingMeetings);
  const error = useSelector((state) => state.meetings.loadingMeetings);
  const [modal, setModal] = useState(null);
  const [modalData, setModalData] = useState([])


  const meetingList = useMemo(() => {
    if (!!meetingsList.length) {
      const forChosenDateData = meetingsList?.filter((el) => {
        return formatDate(fromUtcToLocalTime(el.dateTime), dateFormats.normal) === chosenDate;
      });
      return forChosenDateData.sort((a, b) => moment((a.dateTime)) - moment(b.dateTime));
    }
  }, [meetingsList, chosenDate]);



  const openModal = (info) => {
      setModalData(info.data)
      setModal(info.type)
  }

  const modalMeeting = {
    Part: <PartModal  part={modalData}  />,
    Item: <ItemModal parts={modalData}  />
  };

  return (
    <div>
      <ScheduleHeader setChosenDate={setChosenDate} />
      <div className={styles.items_container}>
        {meetingList?.map((item) => (
          <ScheduleItem item={item} key={item._id} openModal={openModal}/>
        ))}
      </div>
      <Modal modal={!!modal} setModal={() => setModal(null)}>
        {modalMeeting[modal]}
      </Modal>
    </div>
  );
};

export default ScheduleContainer;
