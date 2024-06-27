import styles from './mainContainer.module.css'
import {Route, Routes} from "react-router-dom";
import PremiumPage from "../../../pages/PremiumPage";
import SchedulePage from "../../../pages/SchedulePage";
import ProfilePage from "../../../pages/ProfilePage";
import GetStarted from "./getStarted/getStarted";


const MainContainer = () => {
    return(
        <div className={styles.schedule_container}>
                <Routes>
                    <Route path="/" element={<GetStarted/>}/>
                    <Route path="/schedule" element={<SchedulePage/>}/>
                    <Route path="/premium" element={<PremiumPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    {/*<Route path="/help" element={<Help/>}/>*/}
                    {/*<Route path="*" element={<Page404/>}/>*/}
                </Routes>
        </div>
    )
}

export default MainContainer;