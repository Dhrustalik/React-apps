
class SwapiService {

    _apiBase = 'https://swapi.co/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}`)
        }
        const body = await res.json();

        return body;
    };

    getAllPeople = async() => {
        const res = await this.getResourse('/people/');
        return res.results.map(this._transformPerson);
    };

    getPerson = async (id) => {
        const person = await this.getResourse(`/people/${id}/`);
        return this._transformPerson(person);
    };

    getAllPlanets = async() =>{
        const res = await this.getResourse(`/planets/`);
        return res.results.map(this._transformPlanet);
    };

    getPlanet = async(id) => {
        const planet = await this.getResourse(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    getAllStarships = async() => {
        const res = await this.getResourse('/starships/');
        return res.results.map( this._transformStarship);
    };

    getStarship = async(id) => {
        const starship  = await this.getResourse(`/starships/${id}/`);
        return this._transformStarship(starship);
    };

    getPersonImage = ({id}) => {
        return `${this._imageBase}/characters/${id}.jpg`;
    };

    getStarhipImage = ({id}) => {
        return `${this._imageBase}/starships/${id}.jpg`;
    };

    getPlanetImage= ({id}) => {
        return `${this._imageBase}/planets/${id}.jpg`;
    };

    _getId = (item) =>{
        const idReg = /\/([0-9]*)\/$/;
        return item.url.match(idReg)[1];
    };

    _transformPlanet = (planet) =>{
        return {
            id: this._getId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    _transformStarship = (starship) => {
        return {
            id: this._getId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    };

    _transformPerson = (person) => {
        return {
            id: this._getId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

}

export default SwapiService;