import React from 'react';
import Form from "../common/Form";
const Joi = require('@hapi/joi');

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

    const validationSchema = Joi.object({
        name: Joi.string()
            .min(0)
            .required(),
        gender: Joi.string(),
        diameter: Joi.number().positive(),
        height: Joi.number().positive()
    }).unknown(true);

    const title = isNewUnit ? `Add new unit to ${descriptor}`  : `Edit ${formTemplate.name}`

    const saveChanges = (unit) => {
        
        const data = isNewUnit ? [...storageResponse, unit] : storageResponse.map(x => x.id === unit.id ? unit : x )
        localStorage.setItem(descriptor, JSON.stringify(data))
        history.goBack()        
    }
    const validateData = (unit) => {
        const { error, value } = validationSchema.validate(unit);
        error !== undefined ? alert(error) : saveChanges(value)
    }
    
    return (
        <div className="container">
            <h1>{title}</h1>
            <Form
                initialData={formTemplate}
                columns={columns}
                onAddData={validateData}
            />
        </div>
    );
};

export default FormPage;