import styles from './purchaseModal.module.css'
import ModalImg from './purchaseModelImg.png'


const PurchaseModal = () => {

    return(
        <div className={styles.container}>
            {/*<img alt={'img'} src={ModalImg} className={styles.purchase_img}/>*/}
            <div className={styles.premium_info}>Our website is under development, so now you can use it absolutely for free. If you have difficulties working with our site, please go to the Help section and tell us about your problem.</div>
        </div>
    )
}

export default PurchaseModal;