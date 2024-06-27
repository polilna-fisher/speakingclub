import styles from './navbarItem.module.css'
import {Link} from "react-router-dom";
import cx from 'classnames';


const NavbarItem = ({name, icon, link, id, getActiveButton, isActive}) => {

    return(
        <Link to={link} >
            <div
                className={cx([styles.navbar_item_container, isActive && styles.navbar_item_active_container])}
                 onClick={() => {getActiveButton(id)}}>
                <img alt={'icon'} src={icon} className={styles.navbar_item_icon}/>
                <div className={styles.navbar_item_name}>{name}</div>
            </div>
        </Link>
    )
}

export default NavbarItem;