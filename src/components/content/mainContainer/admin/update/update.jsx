import styles from "./update.module.sass";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {routes} from "../../../../../routes";
import UpdateIcon from './edit.svg'
import DeleteIcon from './delete.svg'

const Update = () => {
  const meetingsList = useSelector((state) => state.meetings.meetingsList);


  return (
    <div className={styles.update_container}>
      <div className={styles.update_inner_container}>
        <div className={styles.header_container}>
          <Link to={routes.admin} className={styles.update_header}>Meeting constructor</Link>
        </div>
        <div className={styles.items_container}>
          {meetingsList.map(meeting => {
            return(
                <div className={styles.item_container}>
                  <div className={styles.host_container}
                           >
                    <img
                        alt={"hostIcon"}
                        src={meeting.hostIcon}
                        className={styles.host_icon}
                    />
                    <div className={styles.host_name}>{meeting.host}</div>
                  </div>
                  <div
                      className={styles.meeting_name_container}
                  >
                    <div className={styles.meeting_type}>{meeting.type}</div>
                    <div className={styles.meeting_name}>{meeting.name}</div>
                  </div>
                  <div className={styles.meeting_button_container}>
                    <Link to={`${routes.update}/${meeting._id}`}>
                      <img className={styles.update_icon} alt='edit' src={UpdateIcon}/>
                    </Link>
                    <a>
                      <img className={styles.update_icon} alt='delete' src={DeleteIcon}/>
                    </a>
                  </div>
                </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Update;
