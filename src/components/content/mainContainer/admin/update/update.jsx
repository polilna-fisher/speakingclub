import styles from "./update.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import Meeting from "../create/meeting/meeting";
import Part from "../create/part/part";
import {Link} from "react-router-dom";
import {routes} from "../../../../../routes";

const Update = () => {
  const meetingsList = useSelector((state) => state.meetings.meetingsList);




  return (
    <div className={styles.admin_container}>
      <div className={styles.admin_items_container}>
        <div className={styles.header_container}>
          <Link to={routes.admin} className={styles.admin_header}>Meeting constructor</Link>
        </div>
        <div className={styles.link_container}>
          {meetingsList.map(meeting => {
            return(
                <Link to={routes.updateMeeting} key={meeting._id}>{meeting.name}, {meeting.dateTime}</Link>
            )
          })}


          </div>
      </div>
    </div>
  );
};

export default Update;
