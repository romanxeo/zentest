import React from 'react'
import cs from '../common/common.module.css'
import { useSelector } from 'react-redux'
import {AppRootStateType} from "../../store/store";
import {usersType} from "../../api/api";
import User from "../user/user";
import HeaderTable from "../headerTable/HeaderTable";

const ShowUsers: React.FC = props => {

    const users = useSelector<AppRootStateType, Array<usersType>>(state => state.zen.users)
    const user = users.map(u => <User key={u.id} id={u.id}/>)

    return (
        <div>
            <div className={cs.title}>User list</div>
            <div className={cs.container}>
                <HeaderTable/>
                {user}
            </div>

        </div>
    )
}

export default ShowUsers