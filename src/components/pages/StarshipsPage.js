import React from 'react';
import PageTemplate from '../common/PageTemplate';
import {getStarships} from "../../services/swApiService";



function StarshipsPage() {

    return (
        <PageTemplate
            title="Starships page"
            tableDescriptor="Starships"
            buttonLabel="Starship"
            apiCallFunc={getStarships}
        />
    );

}

export default StarshipsPage;