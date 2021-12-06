import React, {useState} from "react";
import s from './BurgerMenu.module.css'
import {NavLink} from "react-router-dom";

const BurgerMenu = () => {

    const [open, setOpen] = useState<boolean>(false)

    const clickHandler = () => {
        setOpen(!open)
    }

    return (<nav className={s.nav}>
            <label onClick={clickHandler} className={open ? `${s.navShowMenu} ${s.navShowMenuActive}` : s.navShowMenu}>&#9776;</label>
            <ul className={open ? `${s.menu} ${s.menuActive}` : s.menu}>
                <li><NavLink to="/show_users" className={s.menu__item}>Show users</NavLink></li>
                <li><NavLink to="/create_user" className={s.menu__item}>Create user</NavLink></li>
                <li><NavLink to="/get_user" className={s.menu__item}>Get user</NavLink></li>
                <li><NavLink to="/about_us" className={s.menu__item}>About Us</NavLink></li>
            </ul>
        </nav>
    )
};

export default BurgerMenu;
