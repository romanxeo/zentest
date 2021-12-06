import React from 'react'
import s from './ActionButton.module.css'

type propsType = {
    id: number
}

const ActionButton: React.FC<propsType> = props => {

    const {
        id
    } = props

    return (
        <div className={s.dropdown}>
            <div className={s.dropbtn}>Action</div>
            <div className={s.dropdownContent}>
                <div>Delete {id}</div>
                <div>Update</div>
            </div>
        </div>
    )
}

export default ActionButton