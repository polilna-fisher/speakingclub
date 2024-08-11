import styles from "./create.module.css";
import { useState } from "react";
import Part from "./part/part";
import { useSelector } from "react-redux";
import Meeting from "./meeting/meeting";
import {routes} from "../../../../../routes";
import {Link} from "react-router-dom";

const Create = () => {
  const [section, setSection] = useState("parts");
  const savedParts = useSelector((state) => state.meetings.isPartsReceived);

  // const [part1, setPart1] = useState(false);
  // const [part2, setPart2] = useState(false);

  // const getPartSubmission = (part, isSubmit) => {
  //     part === 'part1' ? setPart1(isSubmit)  : setPart2(isSubmit)
  // }

  const sections = {
    parts: (
      <div>
        <Part />
      </div>
    ),
    meeting: (
      <div>
        <Meeting />
      </div>
    ),
  };

  return (
    <div className={styles.admin_container}>
      <div className={styles.admin_items_container}>
        <div className={styles.header_container}>
          <Link to={routes.admin} className={styles.admin_header}>Meeting constructor</Link>
        </div>
        <div className={styles.link_container}>
          <button
              className={styles.button}
              onClick={() => {
                setSection("parts");
            }}
          >
            Create Parts
          </button>
          <button
            className={styles.button}
            disabled={!savedParts}
            onClick={() => {
              setSection("meeting");
            }}
          >
            Create Meeting
          </button>
        </div>
        {sections[section]}
      </div>
    </div>
  );
};

export default Create;
