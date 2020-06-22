import React from 'react';
import PageTemplate from '../common/PageTemplate';
import {getPeople} from "../../services/swApiService";

function PeoplePage() {

    return (
        <PageTemplate
            title="People page"
            tableDescriptor="People"
            buttonLabel="Person"
            apiCallFunc={getPeople}
        />
    );

}

export default PeoplePage;