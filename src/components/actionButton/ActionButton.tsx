import React from 'react'
import s from './ActionButton.module.css'
import {useDispatch} from "react-redux";
import {deleteUserTC} from '../../store/zenReducer';
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
        dispatch(deleteUserTC(id))
    }

    const updateHandler = () => {
        history.push(`/update_user/${id}/`);
    }

    return (
        <div className={s.item}>
            <div className={s.item_dropButton}>Action</div>
            <div className={s.item_dropContent}>
                <div onClick={deleteHandler}>Delete</div>
                <div onClick={updateHandler}>Update</div>
            </div>
        </div>
    )
}

export default ActionButton