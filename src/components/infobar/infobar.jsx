import styles from './infobar.module.sass'
import Infoblock from "./infoBlock/infoblock";
import Footer from "./footer/footer";

const Infobar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.infobar_container}>
                <Infoblock/>
                <Infoblock/>
            </div>
            <Footer/>
        </div>

    )
}

export default Infobar;