import styles from "./premiumItem.module.sass";
import Button from "../../../../button/button";
import {IPremiumItemInfo} from "./premiunItemInfo";
import {FC, useState} from "react";
import Modal from "../../../../modal/modal";
import PurchaseModal from "../purchaseModal/purchaseModal";

interface IPremiumItem{
    key:string,
    premiumItem: IPremiumItemInfo,
}

const PremiumItem = ({key, premiumItem}: IPremiumItem) => {
  const [modal, setModal] = useState(false);
  return (
    <>
          <div className={styles.item_container} key={premiumItem.title}>
            <h3 className={styles.item_period}>{premiumItem.title}</h3>
            <img alt={"icon"} src={premiumItem.icon} className={styles.item_img} />
            <ul className={styles.item_benefits_list}>
              {premiumItem.benefits.map((item) => {
                return (
                  <li className={styles.item_benefits} key={item}>
                    <div className={styles.bullet_point}></div>
                    <div>{item}</div>
                  </li>
                );
              })}
            </ul>
            <div className={styles.item_price}>{premiumItem.price} </div>
            <div className={styles.item_sale}>{premiumItem.sale}</div>
            <Button text={"PURCHASE"} onClickFn={() => setModal(true)} />
          </div>
      <Modal modal={modal} setModal={() => setModal(false)}>
        <PurchaseModal />
      </Modal>
    </>
  );
};

export default PremiumItem;
