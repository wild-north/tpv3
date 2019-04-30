import React, { useEffect } from 'react';
import { AppRouter } from 'routes';
import { appConnector } from './connector';
import { userGuard } from 'services/user-guard';

const Application = ({ fetchCurrentUser, currentUserRoles, currentUserId }) => {
    useEffect(() => {
        fetchCurrentUser();
    }, [fetchCurrentUser]);
    useEffect(() => {
        userGuard(currentUserRoles, currentUserId);
    },[currentUserRoles, currentUserId]);

    return (
        <div className="app">
            <AppRouter/>
        </div>
    );
};

export const App = appConnector(Application);
