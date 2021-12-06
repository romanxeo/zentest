import React, { useState } from 'react'
import s from "./user.module.css"
import {useSelector} from "react-redux";
import { AppRootStateType } from '../../store/store';
import sh0 from '../../assets/sh0.png'
import sh1 from '../../assets/sh1.png'
import ActionButton from '../actionButton/ActionButton';

type propsType = {
    id: number
}

const User: React.FC<propsType> = props => {

    const {
        id
    } = props

    let user = useSelector<AppRootStateType, any>(state => state.zen.users
        .find(u => u.id === id)
    )

    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div className={s.item}>
            <div className={s.name}>{user.id}</div>
            <div className={s.name}>{user.user_name}</div>
            <div className={s.name}>{user.email}</div>
            <div className={s.name}>
                <span>{showPassword ? user.password : "******"}</span>
                <img src={showPassword ? sh1 : sh0} className={s.showPasswordIcon} onClick={() => setShowPassword(!showPassword)} alt=''/>
            </div>
            <div className={s.name}>
                <span className={user.status === 'active' ? s.activeStatus : s.noActiveStatus}>{user.status}</span>
            </div>
            <div className={s.name}><ActionButton id={user.id}/></div>
        </div>
    )
}

export default User