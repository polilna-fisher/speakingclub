import styles from './navbarItem.module.css'
import {Link} from "react-router-dom";

const NavbarItem = ({name, icon, link}) => {
    return(
        <Link to={link}>
            <div className={styles.navbar_item_container}>
                <img alt={'icon'} src={icon} className={styles.navbar_item_icon}/>
                <div className={styles.navbar_item_name}>{name}</div>
            </div>
        </Link>
    )
}

export default NavbarItem;