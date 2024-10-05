import styles from "./navbar.module.sass";
import NavbarItem from "./navbarItem/navbarItem";
import {menuItemsList} from "../../utils/menuItems";
import {FC, useEffect, useMemo} from "react";
import {IMenuItem} from '../../models/IMenu'
import UserNavbarInfo from "./userNavbarInfo/userNavbarInfo";
import {useAppSelector} from "../../redux/store";
import SignOutItem from "./navbarItem/signOutItem";

const Navbar: FC = () => {
    const accessToken = useAppSelector((state) => state.auth.accessToken);
    const user = useAppSelector((state) => state.user.user);

    const menuItems: IMenuItem[] | undefined = useMemo(() => {
        if (accessToken) {
            if(user?.role !== 'admin'){
                return menuItemsList.filter(item => (item.id != 'login') && (item.id != 'admin'))
            }else{
                return menuItemsList.filter(item => (item.id != 'login'))
            }
        } else {
            return menuItemsList.filter(item => (item.id != 'signout') && (item.id != 'admin') )
        }
    }, [accessToken]);


    return (
        <div className={styles.navbar_container}>
            <div className={styles.navbar_header_container}>
                <h2 className={styles.navbar_header}>Welcome to Fishglish</h2>
            </div>
            {
                accessToken && <UserNavbarInfo/>
            }
            <div className={styles.navbar_items_container}>
                {menuItems.map((item: IMenuItem) => {
                        if (item.id === 'signout') {
                            return <SignOutItem key={item.id} id={item.id}/>
                        } else {
                            return <NavbarItem key={item.id} id={item.id}/>
                        }

                    }
                )}
            </div>
        </div>
    );
};

export default Navbar;
