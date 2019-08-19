import React from 'react';
import Overview from './components/Overview/Overview';
import NavBar from './components/NavBar';
import Teams from './components/Teams/Teams';
import Employees from './components/Employees/Employees';
import Projects from './components/Projects/Projects';
import NotFound from './components/NotFound';
import { Route, Switch } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';


function ReactApp() {
    return (
        <div>
        <NavBar/>
        <BrowserRouter>
            <main>
                <Switch>
                    <Route exact path='/' component={Overview}/>
                    <Route exact path='/Employees' component={Employees}/>
                    <Route exact path='/Projects' component={Projects}/>
                    <Route exact path='/Teams' component={Teams}/>
                    <Route path='/*' component={NotFound}/>
                </Switch>
            </main>
        </BrowserRouter>
        </div>
    );
}

export default ReactApp;