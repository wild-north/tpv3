import React from 'react';
import { Route } from 'react-router-dom';
import { CommonWrapper } from 'pages/common-wrapper';

export const DefaultRoute = ({component: Component, ...rest}) => (
    <Route { ...rest } render={props => (
        <CommonWrapper>
            <Component {...props} />
        </CommonWrapper>
    )}/>
);

DefaultRoute.displayName = 'DefaultRoute';
