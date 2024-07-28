import styles from './mainContainer.module.sass'
import {Route, Routes} from "react-router-dom";
import PremiumPage from "../../../pages/PremiumPage";
import SchedulePage from "../../../pages/SchedulePage";
import ProfilePage from "../../../pages/ProfilePage";
import GetStarted from "./getStarted/getStarted";
import AdminPage from "../../../pages/AdminPage";
import NotFoundPage from "../../../pages/NotFoundPage";
import HelpPage from "../../../pages/HelpPage";


const MainContainer = () => {
    return(
        <div className={styles.schedule_container}>
                <Routes>
                    <Route path="/" element={<GetStarted/>}/>
                    <Route path="/schedule" element={<SchedulePage/>}/>
                    <Route path="/premium" element={<PremiumPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/help" element={<HelpPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                    <Route path="/admin" element={<AdminPage/>}/>
                </Routes>
        </div>
    )
}

export default MainContainer;