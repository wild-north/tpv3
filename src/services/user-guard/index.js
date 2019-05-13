import { history } from 'routes/history';
import { ADMIN, TEST_MANAGER, CHECKER, TESTEE } from 'services/user/user';
import { includes } from 'lodash';

import * as endpoints from 'routes/constants';
import { passParamsIntoEndpoint } from 'helpers/endpoints';

export const userGuard = (roles, id) => {
    const getEndpointWithId = endpoint => passParamsIntoEndpoint(endpoint, {id});

    if (includes(roles, ADMIN)) {
        return history.push(getEndpointWithId(endpoints.ADMIN_PROFILE));
    }

    if (includes(roles, TEST_MANAGER)) {
        return history.push(getEndpointWithId(endpoints.TEST_MANAGER_PROFILE));
    }

    if (includes(roles, CHECKER)) {
        return history.push(getEndpointWithId(endpoints.CHECKER_PROFILE));
    }

    if (includes(roles, TESTEE)) {
        return history.push(getEndpointWithId(endpoints.TESTEE_PROFILE));
    }

    // if (window.location.pathname !== '/') {
    //     return history.replace(`/`);
    // }
};
