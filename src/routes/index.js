import React, { Fragment } from 'react';
import * as routes from './constants';
import { Route, Switch } from 'react-router-dom';
import { InitialPage, Error404 } from 'pages';
import { DefaultRoute } from './default-route';

export const AppRouter = () => (
    <Fragment>
        <Switch>
            <DefaultRoute path={ routes.INITIAL } exact component={ InitialPage } />

            <Route path={ '*' } component={ Error404 } />
        </Switch>
        {/*<RootModal/>*/}
    </Fragment>
);
