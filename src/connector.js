import { createSelector, createConnector } from 'helpers';
import {
    fetchCurrentUser,
    login,
    setActiveGroup,
    fetchFilms
} from 'actions';
import { fullName, roles, id } from 'selectors/user';
import { showLoader } from 'selectors/common';
import { activeGroupId } from 'selectors/groups';
import { NO_ACTION } from 'selectors';
import { passParamsIntoEndpoint } from 'helpers/endpoints';
import { reduce } from 'lodash';
import { userProfileTabs, groupTabs } from 'config';

export const appConnector = createConnector(null, {
    fetchCurrentUser
});

const headerSelector = createSelector(
    fullName,
    fullName => ({ fullName })
);

export const headerConnector = createConnector(headerSelector, NO_ACTION);

const lockerSelector = createSelector(
    showLoader,
    predicate => ({ predicate })
);

export const lockerConnector = createConnector(lockerSelector, NO_ACTION);

const tabsSelector = createSelector(
    [roles, id],
    (roles, id) => getTabItems(roles, id)
);

const profileSelector = createSelector(
    [fullName, tabsSelector],
    (fullName, tabItems) => ({ fullName, tabItems })
);

export const profileConnector = createConnector(profileSelector, NO_ACTION);


function getTabItems(roles, id) {
    const getEndpointWithId = endpoint => passParamsIntoEndpoint(endpoint, {id});

    return reduce(roles, (acc, role) => {
        const tab = userProfileTabs[role];

        acc.push({ ...tab, to: getEndpointWithId(tab.to) });

        return acc;
    }, []).sort((a,b) => a.sortOrder > b.sortOrder ? 1 : -1);
}

const adminProfileSelector = createSelector(
    [fullName],
    (fullName) => ({ fullName })
);

export const adminProfileConnector = createConnector(adminProfileSelector, NO_ACTION);

const initialPageSelector = createSelector(
    [roles, id],
    (roles, id) => ({ roles, id })
);

export const initialPageConnector = createConnector(initialPageSelector, NO_ACTION);

export const loginConnector = createConnector(null, {
    submit: login
});


const groupDetailsSelector = createSelector(
    [activeGroupId],
    (activeGroupId) => ({ tabItems: getGroupTabItems(groupTabs, activeGroupId) })
);

export const groupDetailsConnector = createConnector(groupDetailsSelector, {
    setActiveGroup
});

function getGroupTabItems(tabs, id) {
    const getEndpointWithId = endpoint => passParamsIntoEndpoint(endpoint, {id});

    return reduce(tabs, (acc, tab) => {
        acc.push({ ...tab, to: getEndpointWithId(tab.to) });

        return acc;
    }, []);
}
//////////////////////////////////////////////////////////
// const omdbSelector = createSelector(
//     [activeGroupId],
//     (activeGroupId) => ({ tabItems: getGroupTabItems(groupTabs, activeGroupId) })
// );

export const omdbConnector = createConnector(null, {
    fetchData: fetchFilms
});