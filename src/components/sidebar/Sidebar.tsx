import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Sidebar.module.css'

const Sidebar: React.FC = props => {
    return (
        <div className={s.container}>
            <div className={s.container__menu}>
                <NavLink to="/show_users" activeClassName={s.menu__active}>Show users</NavLink>
                <NavLink to="/create_user" activeClassName={s.menu__active}>Create user</NavLink>
                <NavLink to="/get_user" activeClassName={s.menu__active}>Get user</NavLink>
            </div>
            <div className={s.about__menu}>
                <NavLink to="/about_us" activeClassName={s.menu__active}>About Us</NavLink>
            </div>
        </div>
    )
}

export default Sidebar