import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const DefaultRoute = ({component: Component, ...rest}) => (
    <Route { ...rest } render={props => (
        <React.Fragment>
            <div className="wrapper">
                <Header/>
                <Component {...props} />
                <div className="footer-push"/>
            </div>
            <Footer/>
        </React.Fragment>
    )}/>
);

DefaultRoute.displayName = 'DefaultRoute';
