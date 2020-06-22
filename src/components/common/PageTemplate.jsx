import React, { useState, useEffect } from 'react';
import Table from "./Table";
import Button from "./Button";
import { Link } from "react-router-dom";

const PageTemplate = ({title, tableDescriptor, buttonLabel, apiCallFunc}) => {
    
    const [tableData, setData] = useState([]);
    const lowerCaseDescriptor = tableDescriptor.toLowerCase();
    useEffect( () => {
        const localData=JSON.parse(localStorage.getItem(lowerCaseDescriptor));
        if(localData !== null){
            setData(localData);
        } else{
            const getData = async () => {
                const data = await apiCallFunc();
                localStorage.setItem(lowerCaseDescriptor,JSON.stringify(data));
                setData(data);
                
            }
            getData();
        }
    }, [apiCallFunc, lowerCaseDescriptor, tableDescriptor])
    /*
    const handleAddUnit = (personData) => {
        const data = [...tableData, personData];
        setData(data)
    }
    */
    const handleRemoveUnit = (item) => {
        const localData = JSON.parse(localStorage.getItem(lowerCaseDescriptor));
        let data = localData.filter(row => row.id !== item.id);
        localStorage.setItem(lowerCaseDescriptor, JSON.stringify(data))
        setData(data);
    }

    const getColumnNames = () => {
        if (!tableData.length) {
            return []
        }
        
        return Object.keys(tableData[0])
    }
    
    return (
        <div className="container">
            <h1>{title}</h1>
            <Table
                data={tableData}
                columns={getColumnNames()}
                tableDescriptor={tableDescriptor}
                onRemoveData={handleRemoveUnit}
            />
            <Link to={`${lowerCaseDescriptor}/new`}>
                <Button label={`Add ${buttonLabel}`} classes="alert alert-danger" 
                >
                </Button>
            </Link>
        </div>
    );
};

export default PageTemplate;