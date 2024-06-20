import styles from './navbar.module.css'
import NavbarItem from "./navbarItem/navbarItem";
import {menuItemsList} from "../../utils/menuItems";

const Navbar = () => {
    return(
        <div className={styles.navbar_container}>
            <div className={styles.navbar_header_container}>
                <h2 className={styles.navbar_header}>Welcome to Fishglish</h2>
            </div>
            <div className={styles.navbar_items_container}>
                {
                    menuItemsList.map((item) => (<NavbarItem key={item.id} name={item.name} icon={item.icon} link={item.link}/>))
                }
            </div>
        </div>
    )
}

export default Navbar;