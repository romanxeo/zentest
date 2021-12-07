import React, { useState } from 'react'
import s from './CreateUser.module.css'
import cs from '../common/common.module.css'
import Input from "../Input/Input";
import {createUserTC} from "../../store/zenReducer";
import {useDispatch} from "react-redux";


const CreateUsers: React.FC = props => {

    const dispatch = useDispatch()

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
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
            dispatch(createUserTC(name, email, password))
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
            <div className={cs.title}>Create user</div>
            <div className={`${cs.container} ${s.container__createUser}`}>
                <div className={cs.container__firstLine}>
                    <Input label={'Name'} type={'text'} value={name} onChange={nameHandler} />
                    <Input label={'Email'} type={'email'} value={email} onChange={emailHandler} setValidate={setEmailValidate}/>
                </div>
                <div className={cs.container__secondLine}>
                    <Input label={'Password'} type={'password'} value={password} onChange={passwordHandler}/>
                    <button className={cs.button} onClick={onSubmit}>CREATE</button>
                    <div className={cs.error}>{error && error}</div>
                </div>
            </div>
        </div>
    )
}

export default CreateUsers