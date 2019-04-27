import React, { useEffect } from 'react';
import { AppRouter } from 'routes';
import { getUser } from 'services/user';
import { appConnector } from './connector';

const Application = ({ setCurrentUser }) => {
    useEffect(() => {
        getUser(setCurrentUser);
    });

    return (
        <div className="app">
            <AppRouter/>
        </div>
    );
};

export const App = appConnector(Application);
