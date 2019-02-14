import React, {Component} from 'react';
import Row from '../row';
import { PersonList, PersonDetails } from '../sw-components';

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
                left={<PersonList onItemSelected={this.onItemSelected} /> }
                right={<PersonDetails itemId={this.state.itemId} /> } />
        );
    }
}