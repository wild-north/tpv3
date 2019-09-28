import React from 'react';
import {
    adminProfileConnector,
    omdbConnector
} from 'connector';
import { OMDB } from 'components/omdb';

const Films = omdbConnector(OMDB);

const AdminProfile = (props) => {
    return (
        <div>
            <p>I am Admin</p>
            <Films/>
        </div>
    );
};

export default adminProfileConnector(AdminProfile);