import React from 'react';
import TextFieldView from './TextField';

interface FilterFieldProps {
    data: string[],
    callback: (filteredData: string[]) => void,
    emptyText?: string,
}

const FilterFieldView = ({ data, callback, emptyText = 'Filter' }: FilterFieldProps): JSX.Element => {
    const handler = (event: React.KeyboardEvent): void => {
        const value = (event.target as HTMLInputElement).value.toLowerCase();

        callback(data.filter(item => item.toLowerCase().includes(value)));
    };

    return <TextFieldView handler={handler} emptyText={emptyText} />;
}

export default FilterFieldView;
