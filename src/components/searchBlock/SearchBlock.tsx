import React, {useState} from 'react'
import s from './SearchBlock.module.css'
import cs from '../common/common.module.css'
import Input from "../Input/Input";
import { useDispatch } from 'react-redux';
import {getUserTC, searchUserAC} from "../../store/zenReducer";

const SearchBlock: React.FC = props => {

    const dispatch = useDispatch()
    const [searchId, setSearchId] = useState<string>('')

    const searchIdHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchId(event.target.value);
    }

    const onSubmit = () => {
        dispatch(searchUserAC(+searchId))
        setSearchId('')
    }

    return (
        <div className={s.container}>
            <div className={s.inputContainer}>
                <Input label={'search ID'} type={'number'} value={searchId} onChange={searchIdHandler}/>
            </div>
            <div className={s.buttonContainer}>
                <button className={cs.button} onClick={onSubmit}>Search</button>
            </div>
        </div>
    )
}

export default SearchBlock