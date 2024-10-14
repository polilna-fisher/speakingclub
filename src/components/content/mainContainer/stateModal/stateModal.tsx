import styles from "./stateModal.module.sass";
import cx from "classnames";
import CloseIcon from "./close.svg";
import {FC} from "react";

interface IModal{
  modal:boolean,
  setModal: (value?: boolean) => void
}

const StateModal:FC<IModal> = ({ modal, setModal }) => {
  return (
    <div
      className={cx([styles.modal_container, !!modal && styles.modal_active])}
      onClick={() => setModal()}
    >
      <div
          className={cx([
            styles.modal_content,
            !!modal && styles.modal_content_active,
          ])}
          onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.loader}></div>
      </div>
    </div>
  );
};

export default StateModal;
