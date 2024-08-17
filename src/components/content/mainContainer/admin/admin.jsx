import styles from "./admin.module.sass";
import {Link} from "react-router-dom";
import {routes} from "../../../../routes";

const Admin = () => {

  return (
        <div className={styles.admin_container}>
          <h3 className={styles.admin_header}>Meeting constructor</h3>
          <div className={styles.admin_buttons_container}>
            <Link to={routes.create}>Create meeting</Link>
            <Link to={routes.update}>Update meeting</Link>
          </div>
      </div>
  );
};

export default Admin;
