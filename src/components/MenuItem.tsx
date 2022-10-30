import React from 'react';
import { CSS_PREFIX } from '../constants';

interface MenuItem {
    children: string
    icon: {
        id: string
        viewBox: string
    }
    handler?: () => void
}

const MenuItem = ({ children, icon, handler }: MenuItem): JSX.Element =>
    <div className={`${CSS_PREFIX}menu-item ${icon.id}`} onClick={handler}>
        <a>
            <svg className={`${CSS_PREFIX}icon`} viewBox={`${icon.viewBox}`}>
                <use xlinkHref={`#${icon.id}`}/>
            </svg>
            <span>{children}</span>
        </a>
    </div>

export default MenuItem;
