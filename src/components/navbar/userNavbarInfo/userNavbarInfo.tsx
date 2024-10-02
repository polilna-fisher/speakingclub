import styles from "./userNavbarInfo.module.sass";
import { Link } from "react-router-dom";
import cx from "classnames";
import { menuItemsList } from "../../../utils/menuItems";
import { useDispatch, useSelector } from "react-redux";
import {commonActions} from "../../../redux/commonSlice";
import {useAppSelector} from "../../../redux/store";
import {routes} from "../../../routes";

const UserNavbarInfo = () => {
  // const activeItem = useAppSelector((state) => state.common.activeNavItem);
  // const chosenItem = menuItemsList.filter((item) => item.id === id)[0];
  // const dispatch = useDispatch();
  // const activateItem = (id:string) => {
  //   dispatch(commonActions.toggleActiveNavItem(id));
  // };

  return (
    <Link to={routes.profile}>
       <div className={styles.navbar_profile_container}>
           {/*<div className={styles.navbar_profile_photo_container}>*/}

           {/*</div>*/}
           {/*<div>*/}
           {/*    <h2 className={styles.navbar_profile_name}>Guest</h2>*/}
           {/*</div>*/}

           <button>Login</button>
      </div>
    </Link>
  );
};

export default UserNavbarInfo;
