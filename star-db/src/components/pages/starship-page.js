import React, {Component} from 'react';
import Row from '../row';
import { StarshipList, StarshipDetails } from '../sw-components';

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
                left={<StarshipList onItemSelected={this.onItemSelected} /> }
                right={<StarshipDetails itemId={this.state.itemId} /> } />
        );
    }
}