import styles from "./meeting.module.sass";
import {FC, useState} from "react";
import { meetingActions } from "../../../../../../redux/meetingSlice";
import { createAll } from "../../../../../../service/meetingService";
import { findHostIcon } from "../../../../../../utils/hosts";
import {useAppDispatch, useAppSelector} from "../../../../../../redux/store";
import {IPart} from "../../../../../../models/IPart";
import {IMeeting} from "../../../../../../models/IMeeting";

const Meeting:FC = () => {
  const savedMeeting = useAppSelector((state) => state.meetings.isMeetingReceived);
  const newMeeting = useAppSelector((state) => state.meetings.newMeeting);
  const newPart1 = useAppSelector((state) => state.parts.newPart1);
  const newPart2 = useAppSelector((state) => state.parts.newPart2);
  const defaultPart: IPart = {
    type: '',
    name: '',
    dateTime: '',
    booked: false,
    topic: '',
    questions: ['']
  }
  const defaultMeeting: IMeeting = {
    dateTime: '',
    date: '',
    type: '',
    name: '',
    host: '',
    hostIcon: '',
    idParts: ['']
  }
  const dispatch = useAppDispatch();

  const [dateTime, setDateTime] = useState<string>(!!newPart1 ? newPart1.dateTime : defaultPart.dateTime);
  const [type, setType] = useState<string>(!!newPart1 ? newPart1.type : defaultPart.type);
  const [name, setName] = useState<string>(!!newPart1 ? newPart1.name : defaultPart.name);
  const [host, setHost] = useState<string>("");

  const saveMeeting = async () => {
    const hostIcon = findHostIcon(host);
    console.log(hostIcon, "hostIconhostIcon");

    const meeting = {
      type: type,
      name: name,
      dateTime: dateTime,
      host: host,
      hostIcon: hostIcon,
      idParts: [],
    };

    dispatch(meetingActions.fetchNewMeeting(meeting));
    dispatch(meetingActions.receiveMeeting(true));
  };
  const editMeeting = () => {
    dispatch(meetingActions.receiveMeeting(false));
  };

  return (
    <div className={styles.part_inner_container}>
      {!savedMeeting ? (
        <>
          <div className={styles.input_container}>
            <h3 className={styles.part_header}>Part 1</h3>
            <div className={styles.submit_block}>
              <input
                className={styles.input}
                type={"datetime-local"}
                placeholder={"dateTime"}
                name={"dateTime"}
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
              />
            </div>
            <div className={styles.submit_block}>
              <select
                className={styles.input}
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option className={styles.input}>Speaking Session</option>
                <option className={styles.input}>Job Interview</option>
                <option className={styles.input}>IELTS Preparation</option>
              </select>
            </div>
            <div className={styles.submit_block}>
              <input
                className={styles.input}
                type={"text"}
                placeholder={"name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.submit_block}>
              <input
                className={styles.input}
                type={"text"}
                placeholder={"host"}
                value={host}
                onChange={(e) => setHost(e.target.value)}
              />
            </div>
          </div>
        </>
      ) : (
        <div className={styles.output_container}>
          <div>Meeting</div>
          <div>{newMeeting?.name}</div>
          <div>{newMeeting?.type}</div>
          <div>{newMeeting?.dateTime}</div>
          <div>Part 1</div>
          <div>{newPart1?.name}</div>
          <div>{newPart1?.type}</div>
          <div>{newPart1?.dateTime}</div>
          <div>Part 2</div>
          <div>{newPart2?.name}</div>
          <div>{newPart2?.type}</div>
          <div>{newPart2?.dateTime}</div>
        </div>
      )}

      {savedMeeting ? (
        <>
          <button className={styles.edit_button} onClick={() => editMeeting()}>
            Edit
          </button>
          <button
            className={styles.submit_button}
            onClick={() => createAll(!!newPart1 ? newPart1 : defaultPart,
                !!newPart2 ? newPart2 : defaultPart,
                !!newMeeting ? newMeeting : defaultMeeting)}
          >
            Create
          </button>
        </>
      ) : (
        <button className={styles.submit_button} onClick={() => saveMeeting()}>
          Submit
        </button>
      )}
    </div>
  );
};

export default Meeting;
