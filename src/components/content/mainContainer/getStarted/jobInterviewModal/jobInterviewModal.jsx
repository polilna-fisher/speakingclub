import styles from "./jobInterviewModal.module.css";
import ModalImg from "../getStartedModal/jobInterviewImg.png";

const JobInterviewModal = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Job Interview</h3>
      <div className={styles.content}>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <div className={styles.list_icon}></div>
            <p>
              In job interview meeting, we will divide all participants into
              pairs.
            </p>
          </li>
          <li className={styles.list_item}>
            <div className={styles.list_icon}></div>
            <p>
              We prepare question you can be asked on a job interview which you
              can discuss on a meeting
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
            <p>
              We provide you some useful tips and phrases which help you to
              answer prepared questions
            </p>
          </li>
          <li className={styles.list_item}>
            <div className={styles.list_icon}></div>
            <p>Ask each other and discuss the answers</p>
          </li>
          <li className={styles.list_item}>
            <div className={styles.list_icon}></div>
            <p>Please, turn on your camera during meeting.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JobInterviewModal;
