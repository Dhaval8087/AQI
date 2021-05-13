import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/home';
import { ROUTES } from './constants';

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route

                path={ROUTES.HOME}
                exact
                component={Home}
            />
        </Switch>
    </BrowserRouter>

);
