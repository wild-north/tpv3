import React, { Fragment } from 'react';
import * as routes from './constants';
import { Route, Switch } from 'react-router-dom';
import { Home, Error404, Profile } from 'pages';
import { DefaultRoute } from './default-route';

import { profileConnector } from 'connector';

const ProfilePage = profileConnector(Profile);
const InitialPage = profileConnector(Home);

export const AppRouter = () => (
    <Fragment>
        <Switch>
            <DefaultRoute path={ routes.INITIAL_PAGE } exact component={ InitialPage } />
            <DefaultRoute path={ routes.PROFILE_PAGE } component={ ProfilePage } />
            <Route path={ '*' } component={ Error404 } />
        </Switch>
        {/*<RootModal/>*/}
    </Fragment>
);
