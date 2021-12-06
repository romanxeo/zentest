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
            <div className={open ? `${s.accordionTitle} ${s.accordionTitleActive}` : s.accordionTitle} onClick={clickHandler}>
                {title}
            </div>
            <div className={open ? `${s.description} ${s.descActiv}` : s.description}>
                {description}
            </div>
        </div>

    )
}

export default Accordion