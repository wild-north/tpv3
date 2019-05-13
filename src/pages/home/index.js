import React, { useEffect } from 'react';
// import { userGuard } from 'services/user-guard';
import { Redirect } from 'react-router-dom';
import { ADMIN, TEST_MANAGER, CHECKER, TESTEE } from 'services/user/user';
import { includes } from 'lodash';

import * as endpoints from 'routes/constants';
import { passParamsIntoEndpoint } from 'helpers/endpoints';
// import { history } from 'routes/history';

export const Home = (props) => {
    const { roles, id, match } = props;

    if (match.path === '/') {
        const getEndpointWithId = endpoint => passParamsIntoEndpoint(endpoint, {id});

        if (includes(roles, ADMIN)) {
            return <Redirect to={ getEndpointWithId(endpoints.ADMIN_PROFILE) }/>;
        }

        if (includes(roles, TEST_MANAGER)) {
            return <Redirect to={ getEndpointWithId(endpoints.TEST_MANAGER_PROFILE) }/>;
        }

        if (includes(roles, CHECKER)) {
            return <Redirect to={ getEndpointWithId(endpoints.CHECKER_PROFILE) }/>;
        }

        if (includes(roles, TESTEE)) {
            return <Redirect to={ getEndpointWithId(endpoints.TESTEE_PROFILE) }/>;
        }

        return (<p>Loading...</p>);
    }
};
