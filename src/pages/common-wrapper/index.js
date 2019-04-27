import React, { Fragment } from 'react';
import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { headerConnector/*, lockerConnector*/ } from 'connector';
import { ScreenLocker } from 'components/screen-locker';

const AppHeader = headerConnector(Header);
// const Locker = lockerConnector(ScreenLocker);

export const CommonWrapper = ({ children }) => (
    <Fragment>
        <div className="wrapper">
            <AppHeader/>
            <ScreenLocker/>
            <div className="content">
                { children }
            </div>
        </div>
        <Footer/>
    </Fragment>
);

CommonWrapper.displayName = 'DefaultRoute';
