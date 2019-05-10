import React from 'react';
import { adminProfileConnector } from 'connector';

const AdminProfile = (props) => {
    return (
        <div>
            <p>I am Admin</p>
        </div>
    );
};

export default adminProfileConnector(AdminProfile);