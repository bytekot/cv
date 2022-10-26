import React from 'react';
import TextField from './TextField';

interface FilterFieldProps {
    data: string[]
    callback: (filteredData: string[]) => void
    emptyText?: string
}

const FilterField = ({ data, callback, emptyText = 'Filter' }: FilterFieldProps): JSX.Element => {
    const handler = (event: React.KeyboardEvent): void => {
        const value = (event.target as HTMLInputElement).value.toLowerCase();

        callback(data.filter(item => item.toLowerCase().includes(value)));
    };

    return <TextField handler={handler} emptyText={emptyText} />;
}

export default FilterField;
