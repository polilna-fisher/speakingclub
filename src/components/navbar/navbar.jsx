import styles from './navbar.module.css'
import NavbarItem from "./navbarItem/navbarItem";
import {menuItemsList} from "../../utils/menuItems";
import {useState} from "react";

const Navbar = () => {
    const [activeButton, setActiveButton] = useState(null);

    const getActiveButton = (activeButtonId) => {
        setActiveButton(activeButtonId)
    }

    return(
        <div className={styles.navbar_container}>
            <div className={styles.navbar_header_container}>
                <h2 className={styles.navbar_header}>Welcome to Fishglish</h2>
            </div>
            <div className={styles.navbar_items_container}>
                {
                    menuItemsList.map((item) => (<NavbarItem
                        isActive={activeButton === item.id}
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        icon={item.icon}
                        link={item.link}
                        getActiveButton={getActiveButton}/>))
                }
            </div>
        </div>
    )
}

export default Navbar;