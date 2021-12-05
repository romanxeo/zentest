import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Sidebar.module.css'

const Sidebar: React.FC = props => {
    return (
        <div className={s.item}>
            <NavLink to="/show_users" activeClassName={s.active}>Show users</NavLink>
            <NavLink to="/create_user" activeClassName={s.active}>Create user</NavLink>
            <NavLink to="/update_user" activeClassName={s.active}>Update user</NavLink>
            <NavLink to="/get_user" activeClassName={s.active}>Get user</NavLink>
            <NavLink to="/about_us" activeClassName={s.active}>About Us</NavLink>
        </div>
    )
}

export default Sidebar