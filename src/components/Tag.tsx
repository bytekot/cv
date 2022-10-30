import React from 'react'
import { CSS_PREFIX } from '../constants'

interface TagProps {
    additionalCls?: string
    children: string
}

const Tag = ({ additionalCls, children }: TagProps): JSX.Element =>
    <li className={`${CSS_PREFIX}tag ${additionalCls}`}>
        {children}
    </li>

export default Tag
