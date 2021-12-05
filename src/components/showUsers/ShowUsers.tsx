import React from 'react'
import s from './ShowUsers.module.css'
import cs from '../common/common.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {AppRootStateType} from "../../store/store";
import {usersType} from "../../api/api";
import User from "../user/user";

const ShowUsers: React.FC = props => {
    const dispatch = useDispatch()
    const users = useSelector<AppRootStateType, Array<usersType>>(state => state.zen.users)

    const user = users.map(u => <User key={u.id} id={u.id}/>)

    return (
        <div>
            <div className={cs.title}>User list</div>
            <div className={cs.container}>
                <div className={s.table}>
                    <div>id</div>
                    <div>name</div>
                    <div>email</div>
                    <div>password</div>
                    <div>status</div>
                    <div>action</div>
                </div>
                {user}
            </div>

        </div>
    )
}

export default ShowUsers