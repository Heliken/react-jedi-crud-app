import React from 'react';
import Button from "./Button";

function Table({columns, data, tableDescriptor, onRemoveData}) {
    
    const handleRemoveData = item => () => {
        onRemoveData(item);      
    };

    const dataExists = data.length > 0 ? true : false;

    function noData(){
        return <td style="display:block;width:100%">Thist table has no data yet</td>
    }
    
    function hasData(){
        return(
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">{tableDescriptor}</th>
                        {columns.map(columnTitle => (
                            <th key={columnTitle} scope="col">{columnTitle}</th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id}>
                            <th scope="row">{++index}</th>
                            {columns.map(columnTitle => (
                                <td key={item[columnTitle]+columnTitle}>{item[columnTitle]}</td>
                            ))}
                            <td>
                                <Button
                                    label="Delete"
                                    classes="alert alert-danger"
                                    onClick={handleRemoveData(item)}
                                />
                            </td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
        )
    }
    
    return (
        //dataExists ? hasData : noData
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">{tableDescriptor}</th>
                    {columns.map(columnTitle => (
                        <th key={columnTitle} scope="col">{columnTitle}</th>
                    ))}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={item.id}>
                        <th scope="row">{++index}</th>
                        {columns.map(columnTitle => (
                            <td key={item[columnTitle]+columnTitle}>{item[columnTitle]}</td>
                        ))}
                        <td>
                            <Button
                                label="Delete"
                                classes="alert alert-danger"
                                onClick={handleRemoveData(item)}
                            />
                        </td>
                    </tr>
                    
                ))}
            </tbody>
        </table>
    )
}

export default Table;
