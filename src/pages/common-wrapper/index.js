import React, { Fragment } from 'react';
import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { headerConnector, lockerConnector } from 'connector';
import { ScreenLocker } from 'components/screen-locker';
import { Breadcrumbs } from 'components/breadcrumbs';

const AppHeader = headerConnector(Header);
const Locker = lockerConnector(ScreenLocker);

export const CommonWrapper = ({ children }) => (
    <Fragment>
        <div className="wrapper">
            <AppHeader/>
            <Breadcrumbs/>
            <Locker/>
            <div className="content">
                { children }
            </div>
        </div>
        <Footer/>
    </Fragment>
);

CommonWrapper.displayName = 'DefaultRoute';
