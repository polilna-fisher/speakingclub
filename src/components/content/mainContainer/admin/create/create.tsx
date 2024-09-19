import styles from "./create.module.sass";
import {FC} from "react";
import {routes} from "../../../../../routes";
import {Link} from "react-router-dom";
import CreateMeeting from "./createMeeting/createMeeting";

const Create:FC = () => {

  // const [section, setSection] = useState("parts");
  // const savedParts = useSelector((state) => state.meetings.isPartsReceived);


  // const sections = {
  //   parts: (
  //     <div>
  //       <Part />
  //     </div>
  //   ),
  //   meeting: (
  //     <div>
  //       <CreateMeeting />
  //     </div>
  //   ),
  // };

  return (
    <div className={styles.admin_container}>
      <div className={styles.admin_items_container}>
        <div className={styles.header_container}>
          <Link to={routes.admin} className={styles.admin_header}>Meeting constructor</Link>
        </div>
        <div className={styles.link_container}>
          <button
              className={styles.button}
              // onClick={() => {
              //   setSection("parts");
              // }}
          >
            Create Parts
          </button>
          <button
            className={styles.button}
            // disabled={!savedParts}
            // onClick={() => {
            //   setSection("meeting");
            // }}
          >
            Create Meeting
          </button>
        </div>

        {/*{sections[section]}*/}
        <CreateMeeting/>
      </div>
    </div>
  );
};

export default Create;
