import styles from './layout.module.css'
import Navbar from "../navbar/navbar";
import Infobar from "../infobar/infobar";
import Content from "../content/content";
import Header from "../content/header/header";

const Layout = () => {
    return(
        <div className={styles.section}>
            <Header/>
            <div className={styles.container}>
                <Navbar/>
                <Content/>
                <Infobar/>
            </div>
        </div>
    )
}

export default Layout;