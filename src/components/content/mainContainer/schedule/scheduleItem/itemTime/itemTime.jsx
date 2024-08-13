import styles from "./itemTime.module.sass";

const ItemTime = ({ date }) => {
  return (
    <div className={styles.item_container}>
      {date.split("T")[1].substring(0, 5)}
    </div>
  );
};

export default ItemTime;
