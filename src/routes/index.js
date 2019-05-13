import React, { Fragment } from 'react';
import * as routes from './constants';
import { Route, Switch } from 'react-router-dom';
import * as pages from 'pages';
import { DefaultRoute } from './default-route';

import { profileConnector, loginConnector, initialPageConnector } from 'connector';

const ProfilePage = profileConnector(pages.Profile);
const InitialPage = initialPageConnector(pages.Home);
const LoginPage = loginConnector(pages.Login);

export const AppRouter = () => (
    <Fragment>
        <Switch>
            <DefaultRoute path={ routes.INITIAL_PAGE } exact component={ InitialPage } />
            <Route path={ routes.LOGIN_PAGE } exact component={ LoginPage } />
            <DefaultRoute path={ routes.PROFILE_PAGE } component={ ProfilePage } />

            <DefaultRoute path={ routes.GROUPS } component={ pages.Groups } />
            <DefaultRoute path={ routes.LIBRARY } component={ pages.Library } />
            <DefaultRoute path={ routes.RESULTS } component={ pages.Results } />
            <DefaultRoute path={ routes.USERS } component={ pages.Users } />
            <Route path={ '*' } component={ pages.Error404 } />
        </Switch>
        {/*<RootModal/>*/}
    </Fragment>
);
