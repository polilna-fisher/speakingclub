import styles from "./scheduleContainer.module.sass";
import ScheduleHeader from "../scheduleHeader/scheduleHeader";
import ScheduleItem from "../scheduleItem/scheduleItem";
import {FC, useEffect, useMemo, useState} from "react";
import moment from "moment";
import {dateFormats, formatDate, fromUtcToLocalTime} from "../../../../../utils/dateCount";
import PartModal from "../partModal/partModal";
import ItemModal from "../itemModal/itemModal";
import Modal from "../../../../modal/modal";
import {useAppDispatch, useAppSelector} from "../../../../../redux/store";
import {IPart} from "../../../../../models/IPart";
import {meetingActions} from "../../../../../redux/meetingSlice";
import {partActions} from "../../../../../redux/partSlice";

interface IModalMeeting {
    Part: JSX.Element;
    Item: JSX.Element;
}


const ScheduleContainer:FC = () => {
  const [chosenDate, setChosenDate] = useState();

  const meetingsList = useAppSelector((state) => state.meetings.meetingsList);
  const loading = useAppSelector((state) => state.meetings.loadingMeetings);
  const error = useAppSelector((state) => state.meetings.loadingMeetings);
  const [modal, setModal] = useState<null | string>(null);
  const [modalData, setModalData] = useState<null | IPart | IPart[]>(null)
  const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(meetingActions.fetchMeetingsList())
        dispatch(partActions.fetchPartsList())
    }, []);


    const getMeetingList = useMemo(() => {
    if (!!meetingsList.length) {
      const forChosenDateData = meetingsList?.filter((el) => {
        return formatDate(fromUtcToLocalTime(el.dateTime), dateFormats.normal) === chosenDate;
      });
        // @ts-ignore
        return forChosenDateData.sort((a, b) => moment((a.dateTime)) - moment(b.dateTime));
    }
  }, [meetingsList, chosenDate]);



  const openModal = (info: {type: string, data: IPart | IPart[]}) => {
      setModalData(info.data)
      setModal(info.type)
  }

  const modalMeeting:IModalMeeting = {
    Part: <PartModal  part={Array.isArray(modalData) ? modalData[0] : modalData}/>,
    Item: <ItemModal parts={Array.isArray(modalData) ? modalData : []}/>
  };

  return (
    <div>
      <ScheduleHeader setChosenDate={setChosenDate} />
      <div className={styles.items_container}>
        {getMeetingList?.map((item) => (
          <ScheduleItem item={item} key={item._id} openModal={openModal}/>
        ))}
      </div>
      <Modal modal={!!modal} setModal={() => setModal(null)}>
        {modal && modalMeeting[modal  as keyof IModalMeeting]}
      </Modal>
    </div>
  );
};

export default ScheduleContainer;
