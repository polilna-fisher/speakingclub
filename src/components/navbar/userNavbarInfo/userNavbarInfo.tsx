import styles from "./userNavbarInfo.module.sass";
import { Link } from "react-router-dom";
import {useAppSelector} from "../../../redux/store";
import {routes} from "../../../routes";
import ProfileDefaultImg from './profile.png'

const UserNavbarInfo = () => {
    const user = useAppSelector((state) => state.user.user);

  return (
    <Link to={routes.profile}>
       <div className={styles.navbar_profile_container}>
           <div className={styles.navbar_profile_photo_container}>
                <img alt='icon' src={ProfileDefaultImg} className={styles.navbar_profile_photo}/>
           </div>
           <div>
               <h2 className={styles.navbar_profile_name}>{user?.name}</h2>
           </div>
      </div>
    </Link>
  );
};

export default UserNavbarInfo;
