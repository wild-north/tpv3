import React, { Fragment } from 'react';
import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { headerConnector, lockerConnector } from 'connector';
import { ScreenLocker } from 'components/screen-locker';
import { Breadcrumbs } from 'components/breadcrumbs';
import { breadcrumbsRoutes, mainNavigation } from 'config';

const AppHeader = headerConnector(Header);
const Locker = lockerConnector(ScreenLocker);

export const CommonWrapper = ({ children }) => (
    <Fragment>
        <div className="wrapper">
            <AppHeader navTabs={ mainNavigation }/>
            <Breadcrumbs mappedRoutes={ breadcrumbsRoutes }/>
            <Locker/>
            <div className="content">
                { children }
            </div>
        </div>
        <Footer/>
    </Fragment>
);

CommonWrapper.displayName = 'DefaultRoute';
