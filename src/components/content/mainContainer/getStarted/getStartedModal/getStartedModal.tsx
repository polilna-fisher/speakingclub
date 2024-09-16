import styles from "./getStartedModal.module.sass";
import {FC} from "react";

interface IGetStartedModal{
    header: string,
    leftList: Array<string>,
    rightList: Array<string>
}

const GetStartedModal:FC<IGetStartedModal> = ({ header, leftList, rightList }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{header}</h3>
      <div className={styles.content}>
        <ul className={styles.list}>
          {leftList.map((item) => {
            return (
              <li className={styles.list_item} key={item}>
                <div className={styles.list_icon}></div>
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
        <ul className={styles.list}>
          {rightList.map((item) => {
            return (
              <li className={styles.list_item} key={item}>
                <div className={styles.list_icon}></div>
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default GetStartedModal;
