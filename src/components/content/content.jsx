import styles from './content.module.css'
import BookedInfo from "./bookedInfo/bookedInfo";
import MainContainer from "./mainContainer/mainContainer";

const Content = () => {
    return(
            <div className={styles.content_container}>
                <BookedInfo/>
                <MainContainer/>
            </div>

    )
}

export default Content;