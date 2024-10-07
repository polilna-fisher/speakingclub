import styles from "./content.module.sass";
import BookedInfo from "./bookedInfo/bookedInfo";
import {FC} from "react";
import MainContainer from "./mainContainer/mainContainer";

const Content:FC = () => {
  return (
    <div className={styles.content_container}>
      <BookedInfo />
      <MainContainer />
    </div>
  );
};

export default Content;
