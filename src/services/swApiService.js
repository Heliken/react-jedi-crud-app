const url = 'https://swapi.dev/api'


export const getPeople = async () => {
    const peopleResponse = await (await fetch(`${url}/people`)).json();

    return  peopleResponse.results.map(({name, height, mass, gender, birth_year, id}) => ({
        name, height, mass, gender, birth_year, id: '_' + Math.random().toString(36).substr(2, 9)
    }))
}

export const getPlanets = async () => {
    const planetsResponse = await (await fetch(`${url}/planets`)).json();

    return  planetsResponse.results.map(({name, diameter, climate, gravity, terrain, id}) => ({
        name, diameter, climate, gravity, terrain, id: '_' + Math.random().toString(36).substr(2, 9)
    }))
}

export const getStarships = async () => {
    const planetsResponse = await (await fetch(`${url}/starships`)).json();

    return  planetsResponse.results.map(({name, model, length, crew, passengers, id}) => ({
        name, model, length, crew, passengers, id: '_' + Math.random().toString(36).substr(2, 9)
    }))
}