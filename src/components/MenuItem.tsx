import React from 'react';
import { CSS_PREFIX } from '../constants';

interface MenuItem {
    text: string,
    icon: {
        id: string,
        viewBox: string,
    },
}

const MenuItem = ({ text, icon }: MenuItem): JSX.Element =>
    <div className={`${CSS_PREFIX}card-elevated`} >
        <a href=''>
            <svg viewBox={`${icon.viewBox}`}>
                <use xlinkHref={`#${icon.id}`} />
            </svg>
            <span>{text}</span>
        </a>
    </div>

export default MenuItem;
