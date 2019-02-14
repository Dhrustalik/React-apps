import React from 'react';
import ItemDetails, {Record} from '../item-details';
import { withSwapiService} from '../hoc-helpers';
import ErrorBoundary from '../error-boundary';
    

const StarshipDetails = (props) => {
    return (
        <ErrorBoundary>
            <ItemDetails {...props} >
                <Record field="model" label="Model" />
                <Record field="manufacturer" label="Manufacturer" />
            </ItemDetails>
            </ErrorBoundary>
    );
}

const mapMethodsToProps = (swapiService) => {
    return {
         getData: swapiService.getStarship,
         getImageUrl: swapiService.getStarhipImage
    }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);