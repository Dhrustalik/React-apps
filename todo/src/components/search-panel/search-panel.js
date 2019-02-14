import React, {Component} from 'react';
import './search-panel.css';


export default class SearchPanel extends Component {

    state = {
        search: ''
    };

    onSearchInput = (e) => {
        const search = e.target.value;
        this.setState({
            search: search
        });
        this.props.onSearchItem(search);
    }

    render() {
        return (
        
            <input 
                className="form-control search-input"
                placeholder="type to search"
                onChange={this.onSearchInput}
                value={this.state.search} />
        )
    };
    
}

