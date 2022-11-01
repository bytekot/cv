import React from 'react'
import { CSS_PREFIX } from '../constants'

const Label = ({ children }: { children?: string }): JSX.Element =>
    <div className={`${CSS_PREFIX}label`}>{children}</div>

export default Label