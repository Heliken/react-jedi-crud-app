import React from 'react';
import PageTemplate from '../components/common/PageTemplate';

const data = [
    {
        "name": "CR90 corvette",
        "model": "CR90 corvette",
        "manufacturer": "Corellian Engineering Corporation",
        "cost_in_credits": "3500000",
        "length": "150",
        "max_atmosphering_speed": "950",
        "crew": "30-165",
        "passengers": "600",
        "id": "1"
    },
    {
        "name": "Star Destroyer",
        "model": "Imperial I-class Star Destroyer",
        "manufacturer": "Kuat Drive Yards",
        "cost_in_credits": "150000000",
        "length": "1,600",
        "max_atmosphering_speed": "975",
        "crew": "47,060",
        "passengers": "n/a",
        "id": "2"
    },
    {
        "name": "Sentinel-class landing craft",
        "model": "Sentinel-class landing craft",
        "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
        "cost_in_credits": "240000",
        "length": "38",
        "max_atmosphering_speed": "1000",
        "crew": "5",
        "passengers": "75",
        "id": "3"
    },
    {
        "name": "Death Star",
        "model": "DS-1 Orbital Battle Station",
        "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
        "cost_in_credits": "1000000000000",
        "length": "120000",
        "max_atmosphering_speed": "n/a",
        "crew": "342,953",
        "passengers": "843,342",
        "id": "4"
    },
    {
        "name": "Millennium Falcon",
        "model": "YT-1300 light freighter",
        "manufacturer": "Corellian Engineering Corporation",
        "cost_in_credits": "100000",
        "length": "34.37",
        "max_atmosphering_speed": "1050",
        "crew": "4",
        "passengers": "6",
        "id": "5"
    },
]

function StarshipsPage() {

    return (
        <PageTemplate
            title="Starships Page"
            data={data}
            tableDescriptor="Starships"
        />
    );

}

export default StarshipsPage;