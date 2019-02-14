import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData : [
           this.createTodoItem('Drink Coffee'),
           this.createTodoItem('Make Awesome App',),
           this.createTodoItem('Have a lunch')
        ],
        search: '',
        filter: 'all'
    };

    createTodoItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
       this.setState( ({todoData}) => {
            const idx = todoData.findIndex( (el) => el.id === id);  

            const newArray = [
                ...todoData.slice(0, idx), 
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            }
       });
    };

    addItem = (text) => {
        
        const newItem = this.createTodoItem(text);

        this.setState( ( {todoData}) => {
            const newArray = [
                ...todoData,
                newItem
            ];
    
            return {
                todoData: newArray
            };
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex( (el) => el.id === id);  
        const oldItem = arr[idx];

        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleDone = (id) => {
        this.setState( ({ todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    onToggleImportant = (id) => {
       this.setState( ( {todoData}) => {
           return {
               todoData: this.toggleProperty(todoData, id, 'important')
           };
       });
    };

    onFilter = (name) => {
        this.setState({
            filter: name
        });
    };

    onSearchItem = (text) => {
        this.setState({
            search: text
        });
    }

    search(items, search) {
        if (search.length === 0) {
            return items;
        };
        search = search.toLowerCase();
        return items.filter( (el) => el.label.toLowerCase().indexOf(search) !== -1);
    }

    filter(items, filter) {
        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter( (el) => !el.done);
            case 'done':
                return items.filter( (el) => el.done);
            default: 
                return items;
        }
    }

    render() {

        const {todoData, filter, search} = this.state;

        const visibleData = this.filter(this.search(todoData, search), filter);

        const doneCount = todoData.filter( (el) => el.done).length;

        const todoCount = todoData.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader todo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchItem={this.onSearchItem}/>
                    <ItemStatusFilter
                        onFilter={this.onFilter} 
                        filter={filter}
                        />
                </div>
            < TodoList 
                todos={visibleData}
                onDeleted={ this.deleteItem}
                onToggleDone= {this.onToggleDone}
                onToggleImportant = {this.onToggleImportant} />
            < ItemAddForm 
                onItemAdded={this.addItem}/>
            </div>    
        );
    }
    
};

