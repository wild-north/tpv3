import React, { useEffect } from 'react';
import { userGuard } from 'services/user-guard';

export const Home = ({ currentUserRoles, currentUserId }) => {
    useEffect(() => {
        userGuard(currentUserRoles, currentUserId);
    },[currentUserRoles, currentUserId]);

    return (
        <p>Loading...</p>
    );
};
