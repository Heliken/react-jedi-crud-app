import React from 'react';
import Button from "./Button";

function Table({columns, data, tableDescriptor, onRemoveData}) {
    
    const handleRemoveData = item => () => {
        onRemoveData(item);      
    };

    const dataExists = data.length > 0 ? true : false;
    
    function TableContent({data, dataExists}) {
       if(dataExists){
            return(
                data.map((item, index) => (
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
                    
                ))
                
            )
        } else{
            return(<tr><td style={{width:'100%',display:"block"}}>Thist table has no data yet</td></tr>)
         }
    }
    return (
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
                <TableContent data={data} dataExists={dataExists}/> 
            </tbody>
        </table>
    )
}

export default Table;
