import React from 'react';
import PageTemplate from '../common/PageTemplate';
import {getPlanets} from "../../services/swApiService";
function PlanetsPage() {

    return (
        <PageTemplate
            title="Planets page"
            tableDescriptor="Planets"
            buttonLabel="Planet"
            apiCallFunc={getPlanets}
        />
    );

}

export default PlanetsPage;