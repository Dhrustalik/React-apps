import React from 'react';

import ItemDetails, {Record} from '../item-details';
import ErrorBoundary from '../error-boundary';
import {withSwapiService} from '../hoc-helpers';

const PersonDetails = (props) => {
    return (
        <ErrorBoundary>
            <ItemDetails {...props} >
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye color" />
                <Record field="birthYear" label="Birth" />
            </ ItemDetails>
        </ ErrorBoundary>
    );
};

const mapMethdsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
};

export default withSwapiService(mapMethdsToProps)(PersonDetails);
