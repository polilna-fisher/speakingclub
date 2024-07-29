import styles from './modal.module.sass'
import cx from "classnames";
import CloseIcon from './close.svg'


const Modal = ({modal, setModal, children}) => {
    return(
        <div className={cx([styles.modal_container, !!modal && styles.modal_active])} onClick={() => setModal()}>
            <div className={cx([styles.modal_content, !!modal && styles.modal_content_active])}
                 onClick={(event) => event.stopPropagation()}>
                <div className={styles.modal_navigation}>
                    <div className={styles.positioned_space}></div>
                    <img alt={'close'} src={CloseIcon} className={styles.modal_close_icon} onClick={() => setModal()}/>
                </div>
                <div className={styles.children}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;