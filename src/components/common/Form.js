import React, { useState } from 'react';
import Input from "./Input";
import Button from "./Button";

const Form = ({columns, initialData, onAddData}) => {
    const [itemData, setItemData] = useState(initialData);
    
    const handleClick = (event) => {
        event.preventDefault();
        onAddData(itemData);
    }

    const handleChange = (event) => {
        const { currentTarget : input } = event;
        const data = {...itemData};
        data[input.name] = input.value;
        setItemData(data)
    }

    if (!Object.keys(initialData).length) {
        return null;
    }

    return (
        <form>
            {columns.map( columnName => (
                <Input
                key={columnName}
                name={columnName}
                label={columnName}
                value={itemData[columnName]}
                type="input"
                onChange={handleChange}
                />
            ))}
            <Button
                label="Save"
                classes="alert alert-danger"
                onClick={handleClick}
            />
        </form>
    );
};

export default Form;
