import styles from "./content.module.sass";
import BookedInfo from "./bookedInfo/bookedInfo";
import MainContainer from "./mainContainer/mainContainer";
import {FC} from "react";

const Content:FC = () => {
  return (
    <div className={styles.content_container}>
      <BookedInfo />
      <MainContainer />
    </div>
  );
};

export default Content;
