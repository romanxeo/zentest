import React, { useState } from 'react'
import s from './Input.module.css'

type propsType = {
    label: string
    type: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    setValidate?: (e: boolean) => void
}

const Import: React.FC<propsType> = props => {

    const {
        label,
        type,
        value,
        onChange,
        setValidate
    } = props

    const [error, setError] = useState<string>('')

    const nameRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const blurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (value === '') {
            return(setError('This field in required'))
        }

        if (type === 'email') {
            if (!nameRegex.test(event.target.value)) {
                setError('Invalid email')
            }
            else {
                setError('')
            }
        }

    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(type === 'email') {
            if (!nameRegex.test(event.target.value)) {
                if (setValidate) {
                    setValidate(false)
                }
            }
            else {
                if (setValidate) {
                    setValidate(true)
                }
            }
        }
        onChange(event);
        setError('')
    }

    return (
        <div className={s.container}>
            <div className={s.inputContainer}>
                <input
                    className={s.input}
                    name={label}
                    type={type}
                    value={value}
                    placeholder=" "
                    onChange={e => changeHandler(e)}
                    onBlur={e => blurHandler(e)}
                />
                <div className={s.cut}></div>
                <label className={s.placeholder}>{label}</label>
                <div className={s.error}>{error && error}</div>
            </div>
        </div>
    )
}

export default Import