import React from 'react'
import TextField from './TextField'

interface FilterFieldProps {
    data: any[]
    filterFn: (data: any[], key: string) => any[]
    callback?: (filteredData: any[]) => void
    emptyText?: string
}

const FilterField = ({ data, filterFn, callback = () => {}, emptyText = 'Filter' }: FilterFieldProps): JSX.Element =>
    <TextField
        handler={(event: React.KeyboardEvent): void =>
            callback(filterFn(data, (event.target as HTMLInputElement).value.toLowerCase()))
        }
        emptyText={emptyText}
    />

export default FilterField
