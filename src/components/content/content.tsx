import styles from "./content.module.sass";
import BookedInfo from "./bookedInfo/bookedInfo";
import {FC} from "react";
import MainContainer from "./mainContainer/mainContainer";
import ToastMessage from "./mainContainer/toastMessage/toastMessage";
import {useAppSelector} from "../../redux/store";

const Content: FC = () => {
    return (
        <div className={styles.content_container}>
            <BookedInfo/>
            <MainContainer/>
            <ToastMessage/>
        </div>
    );
};

export default Content;
