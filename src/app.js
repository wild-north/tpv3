import React, { useEffect } from 'react';
import { AppRouter } from 'routes';
import { appConnector } from './connector';

const Application = ({ fetchCurrentUser }) => {
    useEffect(() => {
        fetchCurrentUser();
    }, [fetchCurrentUser]);

    return (
        <div className="app">
            <AppRouter/>
        </div>
    );
};

export const App = appConnector(Application);
