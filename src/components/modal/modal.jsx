import styles from './modal.module.css'
import cx from "classnames";
import CloseIcon from './close.svg'


const Modal = ({modalTypes, setModalTypes, children}) => {
    return(
        <div className={cx([styles.modal_container, !!modalTypes && styles.modal_active])} onClick={() => setModalTypes(false)}>
            <div className={cx([styles.modal_content, !!modalTypes && styles.modal_content_active])}
                 onClick={(event) => event.stopPropagation()}>
                <div className={styles.modal_navigation}>
                    <div className={styles.positioned_space}></div>
                    <img alt={'close'} src={CloseIcon} className={styles.modal_close_icon} onClick={() => setModalTypes(false)}/>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal;