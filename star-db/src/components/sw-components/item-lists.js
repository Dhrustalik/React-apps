import React from 'react';
import ItemList from '../item-list';
import {withData, withSwapiService, withChildren, compose} from '../hoc-helpers';

const mapPeopleMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
};

const mapPlanetsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};

const renderName = ({name}) => <span>{name}</span>

const PersonList = compose(withSwapiService(mapPeopleMethodsToProps),
                            withData,
                            withChildren(renderName))
                            (ItemList);

const PlanetList = compose(withSwapiService(mapPlanetsMethodsToProps),
                            withData,
                            withChildren(renderName))
                            (ItemList);
                    

const StarshipList = compose(withSwapiService(mapStarshipMethodsToProps),
                            withData,
                            withChildren(renderName))
                            (ItemList);


export {
    PersonList,
    PlanetList,
    StarshipList
}