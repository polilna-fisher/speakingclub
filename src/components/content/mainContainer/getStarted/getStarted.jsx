import styles from "./getStarted.module.sass";
import Picture from "./getStarted.png";
import cx from "classnames";
import IntermediateIcon from "./icons/intermediate.png";
import ExamIcon from "./icons/exam.png";
import EnglishIcon from "./icons/english.png";
import GroupIcon from "./icons/group.png";
import JobIcon from "./icons/job.png";
import Modal from "../../../modal/modal";
import { useState } from "react";
import GetStartedModal from "./getStartedModal/getStartedModal";
import { getStartedModals } from "./getStartedModal/getStartedModalsContent";

const GetStarted = () => {
  const [modal, setModal] = useState(null);

  const modals = (modal) => {
    for(let key in getStartedModals){
      if(key === modal){
        return (<GetStartedModal key={modal} header={getStartedModals[key].header} img={getStartedModals[key].img}
                                          leftList={getStartedModals[key].leftList} rightList={getStartedModals[key].rightList}/>)
      }
    }
  }

  return (
    <div className={styles.started_container}>
      <div className={styles.started_img_container}>
        <img alt={"img"} src={Picture} className={styles.started_img} />
      </div>
      <div className={styles.started_info}>
        <h3 className={styles.started_info_header}>
          Welcome to our Speaking Club!
        </h3>
        <div className={styles.started_text}>
          <p>
            Here, you'll find a friendly and helpful place to practice speaking.
          </p>
          <p>
            Whether you want to get better at public speaking, improve your
            presentations, or feel more confident in daily conversations, we are
            here to support you.
          </p>
          <p>Join us and enjoy the journey of learning and growing together.</p>
          <p>Let's make speaking fun and easy for everyone!</p>
        </div>
      </div>
      <div className={styles.started_features_container}>
        <div className={styles.started_group_container}>
          <div
            className={cx(styles.items_container, styles.item_container_head)}
          >
            <div className={styles.bullet_point}></div>
            <div className={cx([styles.item_name, styles.item_name_head])}>
              Meeting types:
            </div>
          </div>
          <div
            className={styles.items_container}
            onClick={() => setModal("groupDiscussion")}
          >
            <img alt={"icon"} src={GroupIcon} className={styles.item_icon} />
            <div className={styles.item_name}>Group Discussions</div>
          </div>
          <div
            className={styles.items_container}
            onClick={() => setModal("jobInterview")}
          >
            <img alt={"icon"} src={JobIcon} className={styles.item_icon} />
            <div className={styles.item_name}>Job Interview</div>
          </div>
          <div
            className={styles.items_container}
            onClick={() => setModal("ieltsPreparation")}
          >
            <img alt={"icon"} src={ExamIcon} className={styles.item_icon} />
            <div className={styles.item_name}>IELTS preparation</div>
          </div>
        </div>

        <div className={styles.started_group_container}>
          <div
            className={cx(styles.items_container, styles.item_container_head)}
          >
            <div className={styles.bullet_point}></div>
            <div className={cx([styles.item_name, styles.item_name_head])}>
              Minimum level:
            </div>
          </div>
          <div
            className={styles.items_container}
            onClick={() => setModal("intermediate")}
          >
            <img
              alt={"icon"}
              src={IntermediateIcon}
              className={styles.item_icon}
            />
            <div className={styles.item_name}>Intermediate</div>
          </div>
        </div>

        <div className={styles.started_group_container}>
          <div
            className={cx(styles.items_container, styles.item_container_head)}
          >
            <div className={styles.bullet_point}></div>
            <div className={cx([styles.item_name, styles.item_name_head])}>
              Languages:
            </div>
          </div>
          <div
            className={styles.items_container}
            onClick={() => setModal("english")}
          >
            <img alt={"icon"} src={EnglishIcon} className={styles.item_icon} />
            <div className={styles.item_name}>English</div>
          </div>
        </div>
      </div>
      <Modal modal={!!modal} setModal={() => setModal(null)}>
        {modals(modal)}
      </Modal>
    </div>
  );
};

export default GetStarted;
