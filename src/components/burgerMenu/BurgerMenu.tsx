import React from "react";
import s from './BurgerMenu.module.css'

const BurgerMenu = () => {

    return (
        <nav className={s.nav}>
            <input className={s.nav__check} type="checkbox" id="showmenu"/>
            <label className={s.nav__showmenu} htmlFor="showmenu">&#9776;</label>
            <ul className={s.menu}>
                <li><a className={s.menu__item} href="#">Catalog</a></li>
                <li><a className={s.menu__item} href="#">Price</a></li>
                <li><a className={s.menu__item} href="#">Contacts</a></li>
                <li><a className={s.menu__item} href="#">Other</a></li>
            </ul>
        </nav>
    )
};

export default BurgerMenu;
