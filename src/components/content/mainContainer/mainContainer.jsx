import styles from "./mainContainer.module.sass";
import { Route, Routes } from "react-router-dom";
import GetStarted from "./getStarted/getStarted";
import Premium from "./premium/premium";
import Admin from "./admin/admin";
import NotFound from "./notFound/notFound";
import Help from "./help/help";
import Profile from "./profile/profile";
import { routes } from "../../../routes";
import ScheduleContainer from "./schedule/scheduleContainer/scheduleContainer";

const MainContainer = () => {
  return (
    <div className={styles.schedule_container}>
      <Routes>
        <Route path={routes.default} element={<GetStarted />} />
        <Route path={routes.schedule} element={<ScheduleContainer />} />
        <Route path={routes.premium} element={<Premium />} />
        <Route path={routes.profile} element={<Profile />} />
        <Route path={routes.help} element={<Help />} />
        <Route path={routes.notFound} element={<NotFound />} />
        <Route path={routes.admin} element={<Admin />} />
      </Routes>
    </div>
  );
};

export default MainContainer;
