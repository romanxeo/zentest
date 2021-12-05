import React from 'react'
import s from './Header.module.css'
import logo from '../../assets/logo.png'

const Header: React.FC = props => {

    return (
        <div className={s.header}>
            <img className={s.logo} src={logo} alt={''}/>
            <div className={s.component}>avatar</div>
        </div>
    )
}

export default Header