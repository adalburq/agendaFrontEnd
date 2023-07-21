import React, { useState, useEffect } from 'react';
import { Select, FormControl, InputLabel, MenuItem } from '@mui/material';

export default function AppSelect({ id, label = '', items = [], fn, onChange }) {
    const [setItems] = useState([]);
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        if (onChange) {
            onChange('Executei ', event.target.value);
        }

        setValue(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id={`${id}-label`}>{label}</InputLabel>
            <Select
                labelId={`${id}-label`}
                id={id}
                value={value}
                label={label}
                onChange={handleChange}
            >
                { fn(items) }
            </Select>
        </FormControl>
    );
}