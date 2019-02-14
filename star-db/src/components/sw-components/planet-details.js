import React from 'react';

import ItemDetails, {Record} from '../item-details';
import ErrorBoundary from '../error-boundary';
import {withSwapiService} from '../hoc-helpers';

const PlanetDetails = (props) => {
        return (
            <ErrorBoundary>
                <ItemDetails {...props} >
                    <Record field="population" label="Population" />
                    <Record field="diameter" label="Diameter" />
                    <Record field="rotationPeriod" label="Rotation" />
                </ ItemDetails>
            </ ErrorBoundary>
        );        
}
const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
};


export default withSwapiService(mapMethodsToProps)(PlanetDetails);