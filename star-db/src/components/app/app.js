import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services';
import ErrorBoundary from '../error-boundary';
import {SwapiServiceProvider} from '../swapi-service-context';
import './app.css';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';

export default class App extends Component {

    state = {   
        swapiService: new SwapiService()
    };
    

    onServiceChange = () => {
        this.console("Switch to new service");
    }

    render() {
        return (
           <ErrorBoundary>
               <SwapiServiceProvider value={this.state.swapiService} >
                    <div className="stardb-app" >
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet updateInterval={3000}/>
                        <PeoplePage />
                        <PlanetPage />
                        <StarshipPage />
                    </div>
               </SwapiServiceProvider>
            </ErrorBoundary>
        )
    };

}