import styles from "./navbar.module.sass";
import NavbarItem from "./navbarItem/navbarItem";
import { menuItemsList } from "../../utils/menuItems";
import {FC} from "react";
import {IMenuItem} from '../../models/menu'

const Navbar:FC = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_header_container}>
        <h2 className={styles.navbar_header}>Welcome to Fishglish</h2>
      </div>
      <div className={styles.navbar_items_container}>
        {menuItemsList.map((item:IMenuItem) => (
          <NavbarItem key={item.id} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
