import React, {Component} from 'react';
import Row from '../row';
import { PlanetList, PlanetDetails } from '../sw-components';

export default class PeoplePage extends Component {

    state = {
        itemId: null
    }

    onItemSelected = (itemId) => {
        console.log(itemId);
        this.setState({
            itemId
        });

    };

    render() {
        return (
            <Row 
                left={<PlanetList onItemSelected={this.onItemSelected} /> }
                right={<PlanetDetails itemId={this.state.itemId} /> } />
        );
    }
}