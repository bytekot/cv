import React from 'react'

import ButtonGroup from './ButtonGroup'
import { toggleDarkTheme, applySystemTheme } from '../utils'
import { CSS_PREFIX } from '../constants'

import lightThemeIcon from '../icons/theme-light.svg'
import darkThemeIcon from '../icons/theme-dark.svg'

const Header = () => {
    const themeButtons = [{ label: '', icon: lightThemeIcon }, { label: '', icon: darkThemeIcon }]

    return ( 
        <header className={`${CSS_PREFIX}header`}>
            <ButtonGroup
                buttons={themeButtons}
                handler={btnId => toggleDarkTheme(Boolean(btnId))}
                defaultActiveButton={Number(applySystemTheme())}
            />
            {/* <ButtonGroup
                buttons={[{ label: 'EN' }, { label: 'RU' }]}
                handler={() => console.log()}
            /> */}
        </header>
    )
}

export default Header
