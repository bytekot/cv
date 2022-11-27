import React, { useState } from 'react'
import { CSS_PREFIX } from '../constants'

type ButtonConfig = {
    label: string
    icon?: {
        id: string
        viewBox: string
    }
}

const ButtonGroup = ({ buttons, handler, defaultActiveButton = 0 }: {
    buttons: ButtonConfig[]
    handler: (...args: any) => any
    defaultActiveButton?: number
}) => {
    const [activeButtonId, setActiveButton] = useState(defaultActiveButton)

    const handleClick = (event: React.MouseEvent, id: number) => {
        setActiveButton(id)
        handler(id)
    }

    return (
        <div className={`${CSS_PREFIX}button-group`}>
            {buttons.map(({ label, icon }: ButtonConfig, index: number) => (
                <button
                    key={index}
                    name={label}
                    onClick={(event) => handleClick(event, index)}
                    className={index === activeButtonId ? 'active' : ''}
                >
                    {icon
                        ? <svg className={`${CSS_PREFIX}icon`} viewBox={`${icon.viewBox}`}>
                              <use xlinkHref={`#${icon.id}`} />
                          </svg>
                        : ''
                    }
                    {label}
                </button>
            ))}
        </div>
    )
}

export default ButtonGroup
