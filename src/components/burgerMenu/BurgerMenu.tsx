import React, {useState} from "react";
import s from './BurgerMenu.module.css'
import {NavLink} from "react-router-dom";

const BurgerMenu = () => {

    const [open, setOpen] = useState<boolean>(false)

    const clickHandler = () => {
        setOpen(!open)
    }

    return (
        <nav className={s.burger}>
            <label onClick={clickHandler} className={open ? `${s.burger__label} ${s.burger__label__active}` : s.burger__label}>&#9776;</label>
            <ul className={open ? `${s.burger__menu} ${s.burger__menu__active}` : s.burger__menu}>
                <li><NavLink to="/show_users" className={s.burger__menu__item}>Show users</NavLink></li>
                <li><NavLink to="/create_user" className={s.burger__menu__item}>Create user</NavLink></li>
                <li><NavLink to="/get_user" className={s.burger__menu__item}>Get user</NavLink></li>
                <li><NavLink to="/about_us" className={s.burger__menu__item}>About Us</NavLink></li>
            </ul>
        </nav>
    )
};

export default BurgerMenu;
