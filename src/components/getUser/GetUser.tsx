import React from 'react'
import cs from '../common/common.module.css'
import { useSelector } from 'react-redux'
import {AppRootStateType} from "../../store/store";
import {usersType} from "../../api/api";
import User from "../user/user";
import HeaderTable from "../headerTable/HeaderTable";
import SearchBlock from '../searchBlock/SearchBlock';

const GetUser: React.FC = props => {

    const users = useSelector<AppRootStateType, Array<usersType>>(state => state.zen.getUser)

    const user = users.map(u => <User key={u.id} id={u.id}/>)
    debugger
    return (
        <div>
            <div className={cs.title}>Get user by id</div>

            <SearchBlock/>

            <div className={cs.container}>
                <HeaderTable/>
                {user.length !== 0 ? user : <p className={cs.nullMessage}>Enter user id to search</p>}
            </div>
        </div>
    )
}

export default GetUser