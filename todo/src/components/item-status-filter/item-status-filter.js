import React, {Component} from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    render() {

        const {filter, onFilter} = this.props;

        const buttons = [
            { name: 'all', label: 'All'},
            { name: 'active', label: 'Active'},
            { name: 'done', label: 'Done'}
        ];

        const elements = buttons.map( ({name, label}) => {

            const buttonFilter = filter === name;

            const buttonClass = buttonFilter ? 'btn btn-info' : 'btn btn-outline-secondary';

            return (
                <button type="button"
                    className={buttonClass}
                    onClick={() => onFilter(name)}
                    key={name}>{label}</button>
            );
        })        

        return (
            <div className="btn-group">
                {elements}
            </div>
        );
    }
}
