import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { headerConnector } from 'connector';

const AppHeader = headerConnector(Header);

export const DefaultRoute = ({component: Component, ...rest}) => (
    <Route { ...rest } render={props => (
        <React.Fragment>
            <div className="wrapper">
                <AppHeader/>
                <div className="content">
                    <Component {...props} />
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )}/>
);

DefaultRoute.displayName = 'DefaultRoute';
