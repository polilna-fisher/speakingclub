import styles from "./premiumItem.module.sass";
import Button from "../../../../button/button";
import premiumItemInfo from "./premiunItemInfo";
import { useState } from "react";
import Modal from "../../../../modal/modal";
import PurchaseModal from "../purchaseModal/purchaseModal";

const PremiumItem = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      {premiumItemInfo.map((el) => {
        return (
          <div className={styles.item_container} key={el.title}>
            <h3 className={styles.item_period}>{el.title}</h3>
            <img alt={"icon"} src={el.icon} className={styles.item_img} />
            <ul className={styles.item_benefits_list}>
              {el.benefits.map((item) => {
                return (
                  <li className={styles.item_benefits} key={item}>
                    <div className={styles.bullet_point}></div>
                    <div>{item}</div>
                  </li>
                );
              })}
            </ul>
            <div className={styles.item_price}>{el.price} </div>
            <div className={styles.item_sale}>{el.sale}</div>
            <Button text={"PURCHASE"} onClickFn={() => setModal(true)} />
          </div>
        );
      })}
      <Modal modal={modal} setModal={() => setModal(false)}>
        <PurchaseModal />
      </Modal>
    </>
  );
};

export default PremiumItem;
