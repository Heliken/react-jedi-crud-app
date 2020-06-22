import React from 'react';
import Form from "../common/Form";

const FormPage = ({history, match, }) => {
    const defaultFields={
        'people':['name','height','mass','gender','birth_year','id'],
        'starships':['name','model','length','crew','passengers','id'],
        'planets':['name','diameter','climate','gravity','terrain','id']
    }
    const descriptor = match.path.substring(1, match.path.indexOf('/',1));

    const id = match.params.id;

    const isNewUnit = id === 'new';

    const storageResponse=JSON.parse(localStorage.getItem(descriptor));

    let formTemplate = {};
    
    const columns = storageResponse.length > 0 ? Object.keys(storageResponse[0]) : defaultFields[descriptor]

    if (isNewUnit){
        columns.forEach(element => formTemplate[element]= '');
    } else{
        formTemplate = storageResponse.filter(item => item.id === id)[0]
    }

    const title = isNewUnit ? `Add new unit to ${descriptor}`  : `Edit ${formTemplate.name}`

    const saveChanges = (unit) => {
        const data = isNewUnit ? [...storageResponse, unit] : storageResponse.map(x => x.id === unit.id ? unit : x )
        localStorage.setItem(descriptor, JSON.stringify(data))
        history.goBack()        
    }
    return (
        <div className="container">
            <h1>{title}</h1>
            <Form
                initialData={formTemplate}
                columns={columns}
                onAddData={saveChanges}
            />
        </div>
    );
};

export default FormPage;