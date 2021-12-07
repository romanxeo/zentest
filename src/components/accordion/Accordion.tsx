import React, { useState } from 'react'
import s from './Accordion.module.css'

type propsType = {
    title: string
    description: string
}

const Accordion: React.FC<propsType> = props => {

    const {
      title,
      description
    } = props

    const [open, setOpen] = useState<boolean>(false)

    const clickHandler = () => {
        setOpen(!open)
    }

    return (
        <div>
            <div className={open ? `${s.accordion__title} ${s.accordion__title__active}` : s.accordion__title} onClick={clickHandler}>
                <div>{title}</div>
                <div>{open ? '▲' : '▼'}</div>
            </div>
            <div className={open ? `${s.accordion__description} ${s.accordion__description__active}` : s.accordion__description}>
                {description}
            </div>
        </div>

    )
}

export default Accordion