import React from 'react'
import s from './HeaderTable.module.css'

const HeaderTable: React.FC = props => {

    return (
        <div className={s.table}>
            <div>id</div>
            <div>name</div>
            <div>email</div>
            <div>password</div>
            <div>status</div>
            <div>action</div>
        </div>
    )
}

export default HeaderTable

