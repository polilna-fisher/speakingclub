import styles from "./meetingItemForUpdate.module.sass";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {routes} from "../../../../../../routes";

const MeetingItemForUpdate = () => {

  const meetingsList = useSelector((state) => state.meetings.meetingsList);
  // const meeting = meetingsList.find(item => item._id === id)

  return (
    <div className={styles.admin_container}>
      <div className={styles.admin_items_container}>
        <div className={styles.header_container}>
          <Link to={routes.admin} className={styles.admin_header}>Meeting constructor</Link>
        </div>
        {/*<div className={styles.link_container}>*/}
        {/*  {meetingsList.map(meeting => {*/}
        {/*    return(*/}
        {/*        <Link to={`${routes.update}/${meeting._id}`} key={meeting._id}>{meeting.name}, {meeting.dateTime}</Link>*/}
        {/*    )*/}
        {/*  })}*/}
        {/*  </div>*/}
      </div>
    </div>
  );
};

export default MeetingItemForUpdate;
