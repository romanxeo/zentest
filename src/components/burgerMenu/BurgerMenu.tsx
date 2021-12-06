import React from "react";
import s from './BurgerMenu.module.css'
import {NavLink} from "react-router-dom";

const BurgerMenu = () => {

    return (
        <nav className={s.nav}>
            <input className={s.nav__check} type="checkbox" id="showmenu"/>
            <label className={s.nav__showmenu} htmlFor="showmenu">&#9776;</label>
            <ul className={s.menu}>
                <li><NavLink to="/show_users" className={s.menu__item}>Show users</NavLink></li>
                <li><NavLink to="/create_user" className={s.menu__item}>Create user</NavLink></li>
                <li><NavLink to="/update_user" className={s.menu__item}>Update user</NavLink></li>
                <li><NavLink to="/get_user" className={s.menu__item}>Get user</NavLink></li>
                <li><NavLink to="/about_us" className={s.menu__item}>About Us</NavLink></li>
            </ul>
        </nav>
    )
};

export default BurgerMenu;
