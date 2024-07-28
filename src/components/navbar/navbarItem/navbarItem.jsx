import styles from './navbarItem.module.sass'
import {Link} from "react-router-dom";
import cx from 'classnames';
import {menuItemsList} from "../../../utils/menuItems";
import {useDispatch, useSelector} from "react-redux";
import {meetingActions} from "../../../redux/slice";


const NavbarItem = ({id}) => {
    const activeItem = useSelector(state => state.meetings.activeNavItem)
    const chosenItem = menuItemsList.filter(item => item.id === id)[0]
    const dispatch = useDispatch()
    const activateItem = (id) => {
        dispatch(meetingActions.toggleActiveNavItem(id))
    }

    return(
        <Link to={chosenItem.link} >
            <div
                className={cx([styles.navbar_item_container, activeItem===id && styles.navbar_item_active_container])}
                 onClick={() => {activateItem(id)}}>
                <img alt={'icon'} src={chosenItem.icon} className={styles.navbar_item_icon}/>
                <div className={styles.navbar_item_name}>{chosenItem.name}</div>
            </div>
        </Link>
    )
}

export default NavbarItem;