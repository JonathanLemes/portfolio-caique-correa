import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Experiences from './pages/Experiences';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sobre" exact component={About} />
                <Route path="/experiencias" exact component={Experiences} />
                <Route component={Home} />
            </Switch>
        </BrowserRouter>
    )
}