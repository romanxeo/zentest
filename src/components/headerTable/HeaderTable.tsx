import React from 'react'
import cs from '../common/common.module.css'
import s from './HeaderTable.module.css'

const HeaderTable: React.FC = props => {

    return (
        <div className={s.table}>
            <div className={cs.table__hidden}>id</div>
            <div>name</div>
            <div className={cs.table__hidden}>email</div>
            <div>password</div>
            <div>status</div>
            <div>action</div>
        </div>
    )
}

export default HeaderTable

