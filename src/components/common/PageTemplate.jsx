import React, { useState } from 'react';
import Form  from "./Form";
import Table from "./Table";

const PageTemplate = ({title, data, tableDescriptor}) => {
    const columns = Object.keys(data[0]);

    const [people, setPeople] = useState(data);

    const handleAppPerson = (personData) => {
        const data = [...people, personData];
        setPeople(data)
    }

    const handleRemovePerson = (item) => {
        let data = people.filter(row => row.id !== item.id);
        setPeople(data);
    }

    const getInitialPeopleData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }
    return (
        <div className="container">
            <Table
                data={people}
                columns={columns}
                tableDescriptor={tableDescriptor}
                onRemoveData={handleRemovePerson}
            />
            <Form
                initialData={getInitialPeopleData()}
                columns={columns}
                onAddData={handleAppPerson}
            />
        </div>
    );
};

export default PageTemplate;