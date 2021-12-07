import React, {useState} from 'react'
import s from './SearchBlock.module.css'
import cs from '../common/common.module.css'
import Input from "../Input/Input";
import { useDispatch } from 'react-redux';
import {getUserTC} from "../../store/zenReducer";

const SearchBlock: React.FC = props => {

    const dispatch = useDispatch()
    const [searchId, setSearchId] = useState<string>('')

    const searchIdHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchId(event.target.value);
    }

    const onSubmit = () => {
        dispatch(getUserTC(+searchId))
        setSearchId('')
    }

    return (
        <div className={s.container}>
            <div className={s.container__input}>
                <Input label={'Write user ID'} type={'number'} value={searchId} onChange={searchIdHandler}/>
            </div>
            <div className={s.container__button}>
                <button className={cs.button} onClick={onSubmit}>Search</button>
            </div>
        </div>
    )
}

export default SearchBlock