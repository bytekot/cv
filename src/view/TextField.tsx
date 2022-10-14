import React from 'react';
import { CSS_PREFIX } from '../constants';

interface TextFieldProps {
    handler?: (event: React.KeyboardEvent) => void,
    emptyText?: string,
}

const TextField = ({ handler, emptyText }: TextFieldProps): JSX.Element =>
    <input
        type="text"
        placeholder={emptyText}
        className={`${CSS_PREFIX}input`}
        onKeyUp={handler}
        autoFocus
    />

export default TextField;
