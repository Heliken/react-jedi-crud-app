import React, { useState } from 'react';
import Table from "./Table";
import Form from "./Form";

const PageTemplate = ({title, data, tableDescriptor}) => {
    

    const [tableData, setData] = useState(data);

    const handleAddUnit = (personData) => {
        const data = [...tableData, personData];
        setData(data)
    }

    const handleRemoveUnit = (item) => {
        let data = tableData.filter(row => row.id !== item.id);
        setData(data);
    }

    const getColumnNames = () => {
        if (!tableData.length) {
            return []
        }
        return Object.keys(tableData[0])
    }

    const getInitialPeopleData = () => {
        return tableData.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }

    return (
        <div className="container">
            
            <Table
                data={tableData}
                columns={getColumnNames()}
                tableDescriptor={tableDescriptor}
                onRemoveData={handleRemoveUnit}
            />
            <Form
                initialData={getInitialPeopleData()}
                columns={getColumnNames()}
                onAddData={handleAddUnit}
            />
            
        </div>
    );
};

export default PageTemplate;