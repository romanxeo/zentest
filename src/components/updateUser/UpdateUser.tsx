import React, { useState } from 'react'
import s from "./UpdateUser.module.css"
import {useDispatch, useSelector} from "react-redux";
import { AppRootStateType } from '../../store/store';
import { useParams } from 'react-router-dom';
import {updateUserTC} from "../../store/zenReducer";
import cs from "../common/common.module.css";
import Input from "../Input/Input";


const UpdateUser: React.FC = props => {

    let {id} = useParams<{ id: string }>()

    let user = useSelector<AppRootStateType, any>(state => state.zen.users
        .find(u => u.id === +id)
    )

    const dispatch = useDispatch()

    const [name, setName] = useState<string>(user.user_name)
    const [email, setEmail] = useState<string>(user.email)
    const [password, setPassword] = useState<string>(user.password)
    const [error, setError] = useState<string>('')
    const [emailValidate, setEmailValidate] = useState<boolean>(false)

    const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        setError('');
    }

    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        setError('');
    }

    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        setError('');
    }

    const onSubmit = () => {
        if (name !== '' && email !== '' && password !== '' && emailValidate) {
            dispatch(updateUserTC(user.id, name, email, password, user.created_at))
            setName('');
            setEmail('');
            setPassword('');
        }
        else {
            setError('All fields must be filled')
        }
    }

    return (
        <div>
            <div className={cs.title}>Update user data with id: {user.id}</div>
            <div className={cs.container}>
                <div className={s.firstLine}>
                    <Input label={'Name'} type={'text'} value={name} onChange={nameHandler} />
                    <Input label={'Email'} type={'email'} value={email} onChange={emailHandler} setValidate={setEmailValidate}/>
                </div>
                <div className={s.secondLine}>
                    <Input label={'Password'} type={'text'} value={password} onChange={passwordHandler}/>
                    <button className={cs.button} onClick={onSubmit}>Update user data</button>
                    <div className={cs.error}>{error && error}</div>
                </div>
            </div>
        </div>
    )
}

export default UpdateUser