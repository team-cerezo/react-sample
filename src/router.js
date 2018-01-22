import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import AppContainer from './container';
import { About } from './components';

export default () => (
    <BrowserRouter>
        <div>
            <p>
                <Link to="/">[Home]</Link>
                <Link to="/about">[About]</Link>
            </p>
            <Route exact path="/" component={AppContainer} />
            <Route exact path="/about" component={About} />
        </div>
    </BrowserRouter>
);
