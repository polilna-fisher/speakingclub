import styles from "./itemContent.module.css";
import Modal from "../../../../../modal/modal";
import {useEffect, useState} from "react";
import PartModal from "../../partModal/partModal";
import ItemModal from "../../itemModal/itemModal";
import { useSelector } from "react-redux";

const ItemContent = ({ item, openModal }) => {
  const partList = useSelector((state) => state.parts.partsList);
  const part1 = partList.filter((part) => part._id === item.idParts[0])[0];
  const part2 = partList.filter((part) => part._id === item.idParts[1])[0];
  const parts = [{...part1}, {...part2}]

  return (
    <div className={styles.item_container}>
      <div className={styles.host_container}
           onClick={() => openModal({type: "Item", data: parts})}>
        <img
          alt={"hostIcon"}
          src={item.hostIcon}
          className={styles.host_icon}
        />
        <div className={styles.host_name}>{item.host}</div>
      </div>
      <div
        className={styles.meeting_name_container}
        onClick={() => openModal({type: "Item", data: parts})}
      >
        <div className={styles.meeting_type}>{item.type}</div>
        <div className={styles.meeting_name}>{item.name}</div>
      </div>
      <div className={styles.meeting_button_container}>
        <button
          className={styles.meeting_button}
          onClick={() => openModal({type: "Part", data: {...part1}})}
        >
          Part 1
        </button>
        <button
          className={styles.meeting_button}
          onClick={() => openModal({type: "Part", data: {...part2}})}
        >
          Part 2
        </button>
      </div>
    </div>
  );
};

export default ItemContent;
