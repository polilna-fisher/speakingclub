import {FC, useMemo} from "react";
import styles from "./toastMessage.module.sass";
import {useAppSelector} from "../../../../redux/store";
import {ToastType} from "../../../../redux/toastSlice";
import CloseIcon from "./close.svg"
import {hideToast} from "../../../../utils/toast";

const ToastMessage: FC = () => {
    const { message, show, type } = useAppSelector(state => state.toast)

    const bgColor = useMemo(() => {
        if(type === ToastType.WARNING) return 'yellow'
        if(type === ToastType.ERROR) return 'red'
        if(type === ToastType.INFO) return 'gray'
    }, [type]);

    if(!show) return null

    return (
        <div className={styles.toast_container} style={{ background: bgColor}} >
            <div> {message} </div>
            <div onClick={() => hideToast()}>
                <img className={styles.toast_close_icon} src={CloseIcon} alt={'close'}/>
            </div>
        </div>
    )

}

export default ToastMessage