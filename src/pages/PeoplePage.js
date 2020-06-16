import React from 'react';
import PageTemplate from '../components/common/PageTemplate';

const data = [
    {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "birth_year": "19BBY",
        "gender": "male",
        "id": "1"
    },
    {
        "name": "C-3PO",
        "height": "167",
        "mass": "75",
        "birth_year": "112BBY",
        "gender": "n/a",
        "id": "2"
    },
    {
        "name": "R2-D2",
        "height": "96",
        "mass": "32",
        "birth_year": "33BBY",
        "gender": "n/a",
        "id": "3"
    },
    {
        "name": "Darth Vader",
        "height": "202",
        "mass": "136",
        "birth_year": "41.9BBY",
        "gender": "male",
        "id": "4"
    }
]

function PeoplePage() {

    return (
        <PageTemplate
            title="People Page"
            data={data}
            tableDescriptor="People"
        />
    );

}

export default PeoplePage;