import styles from "./button.module.sass";
import {FC} from "react";

interface ButtonProps {
    text: string;
    onClickFn?: () => void
}

const Button:FC<ButtonProps> = ({ text, onClickFn = () => {} }) => {
  return (
    <button
      className={styles.button}
      onClick={() => {
        onClickFn();
      }}
    >
      {text}
    </button>
  );
};

export default Button;
