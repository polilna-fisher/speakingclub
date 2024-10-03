import styles from "./userNavbarInfo.module.sass";
import { Link } from "react-router-dom";
import cx from "classnames";
import { menuItemsList } from "../../../utils/menuItems";
import { useDispatch, useSelector } from "react-redux";
import {commonActions} from "../../../redux/commonSlice";
import {useAppSelector} from "../../../redux/store";
import {routes} from "../../../routes";

const UserNavbarInfo = () => {
    const user = useAppSelector((state) => state.user.user);

  return (
    <Link to={routes.profile}>
       <div className={styles.navbar_profile_container}>
           <div className={styles.navbar_profile_photo_container}>

           </div>
           <div>
               <h2 className={styles.navbar_profile_name}>{user?.email}</h2>
           </div>
      </div>
    </Link>
  );
};

export default UserNavbarInfo;
