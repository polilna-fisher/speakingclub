import styles from "./groupDiscussionsModal.module.sass";
import ModalImg from "../getStartedModal/groupDiscussionImg.png";
import {FC} from "react";

const GroupDiscussionsModal:FC = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Group Discussions</h3>
      <div className={styles.content}>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <div className={styles.list_icon}></div>
            <p>
              In group discussions, we will divide all participants into pairs.
            </p>
          </li>
          <li className={styles.list_item}>
            <div className={styles.list_icon}></div>
            <p>
              During your discussion, you can use the suggested questions or
              talk about whatever you want.
            </p>
          </li>
          <li className={styles.list_item}>
            <div className={styles.list_icon}></div>
            <p>One discussion session lasts 25 minutes.</p>
          </li>
        </ul>
        <img alt={"icon"} src={ModalImg} className={styles.img} />
        <ul>
          <li className={styles.list_item}>
            <div className={styles.list_icon}></div>
            <p>Please, turn on your camera during meeting.</p>
          </li>
          <li className={styles.list_item}>
            <div className={styles.list_icon}></div>
            <p>
              We do not welcome political and religious topics for discussion.
            </p>
          </li>
          <li className={styles.list_item}>
            <div className={styles.list_icon}></div>
            <p>We ban participants for insulting their interlocutors.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GroupDiscussionsModal;
