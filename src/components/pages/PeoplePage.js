import React from 'react';
import PageTemplate from '../common/PageTemplate';

const data = [
    
]

function PeoplePage() {

    return (
        <PageTemplate
            title="People Page"
            data={data}
            tableDescriptor="People"
            buttonLabel="Person"
        />
    );

}

export default PeoplePage;