import React from 'react'
import s from './Header.module.css'
import logo from '../../assets/logo.png'
import BurgerMenu from "../burgerMenu/BurgerMenu";

const Header: React.FC = props => {

    return (
        <div className={s.header}>
            <img className={s.logo} src={logo} alt={''}/>
            <BurgerMenu/>
        </div>
    )
}

export default Header