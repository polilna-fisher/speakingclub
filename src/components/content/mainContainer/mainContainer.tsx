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
import Create from "./admin/create/create";
import Update from "./admin/update/update";
import MeetingItemForUpdate from "./admin/update/meetingItemForUpdate/meetingItemForUpdate";
import {FC} from "react";
import ProtectedRoute from "../../protectedRoute";
import {useAppSelector} from "../../../redux/store";
import LoginForm from "../../loginForm/loginForm";

const MainContainer:FC = () => {

  const user = useAppSelector(state => state.user.user)
  console.log(user, 'usus')

  return (
    <div className={styles.schedule_container}>
      <Routes>
        <Route path={routes.login} element={<LoginForm />} />
        <Route path={routes.default} element={<GetStarted />} />
        <Route path={routes.schedule} element={<ScheduleContainer />} />
        <Route path={routes.premium} element={<Premium />} />
        <Route path={routes.help} element={<Help />} />
        <Route path={routes.notFound} element={<NotFound />} />
        <Route path={routes.profile} element={<ProtectedRoute user={user} children={<Profile/>}/>}/>
        <Route path={routes.admin} element={<ProtectedRoute user={user} children={<Admin/>}/>}/>
        <Route path={routes.create} element={<ProtectedRoute user={user} children={<Create/>}/>}/>
        <Route path={routes.update} element={<ProtectedRoute user={user} children={<Update/>}/>}/>
        <Route path={`${routes.update}/:id`} element={<ProtectedRoute user={user} children={<MeetingItemForUpdate/>}/>}/>
      </Routes>
    </div>
  );
};

export default MainContainer;
