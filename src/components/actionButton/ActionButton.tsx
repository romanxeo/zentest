import React from 'react'
import s from './ActionButton.module.css'
import {useDispatch} from "react-redux";
import {deleteUserAC, deleteUserTC} from '../../store/zenReducer';
import { useHistory } from 'react-router-dom';

type propsType = {
    id: number
}

const ActionButton: React.FC<propsType> = props => {

    const dispatch = useDispatch()
    const history = useHistory();

    const {
        id
    } = props

    const deleteHandler = () => {
        dispatch(deleteUserAC(id))
    }

    const updateHandler = () => {
        history.push(`/update_user/${id}/`);
    }

    return (
        <div className={s.dropdown}>
            <div className={s.dropbtn}>Action</div>
            <div className={s.dropdownContent}>
                <div onClick={deleteHandler}>Delete</div>
                <div onClick={updateHandler}>Update</div>
            </div>
        </div>
    )
}

export default ActionButton