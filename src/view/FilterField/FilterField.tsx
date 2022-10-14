import React from 'react';
import TextField from '../TextField';

interface FilterFieldProps {
    data: string[],
    callback: (filteredData: string[]) => void,
}

const FilterField = ({ data, callback }: FilterFieldProps): JSX.Element => {
    const handler = (event: React.KeyboardEvent): void => {
        const value = (event.target as HTMLInputElement).value.toLowerCase();

        callback(data.filter(item => item.toLowerCase().includes(value)));
    };

    return <TextField handler={handler}></TextField>;
}

export default FilterField;
