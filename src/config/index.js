import { ADMIN, CHECKER, TEST_MANAGER, TESTEE } from 'services/user/user';
import * as routes from 'routes/constants';

export const userProfileTabs = {
    [ADMIN]: {to: routes.ADMIN_PROFILE, text: 'Admin', sortOrder: 1},
    [TEST_MANAGER]: {to: routes.TEST_MANAGER_PROFILE, text: 'Test Manager', sortOrder: 1},
    [CHECKER]: {to: routes.CHECKER_PROFILE, text: 'Checker', sortOrder: 2},
    [TESTEE]: {to: routes.TESTEE_PROFILE, text: 'Testee', sortOrder: 3}
};

export const breadcrumbsRoutes = {
    '/': 'Home',

    '/profile': null,
    '/profile/:id': 'Profile',
    '/profile/:id/admin': 'Admin',
    '/profile/:id/checker': 'Checker',
    '/profile/:id/test-manager': 'Test-Manager',
    '/profile/:id/testee': 'Testee',

    '/groups': 'Groups',
    '/groups/:id': null,
    '/groups/:id/testee-list': 'Testee List',
    '/groups/:id/group-tests': 'Group Tests',

    '/library': 'Library',
    '/library/topics': 'Topics',
    '/library/tests': 'Tests',

    '/results': 'Results',
    '/users': 'Users'
};

export const mainNavigation = [
    { to: routes.GROUPS, text: 'Groups' },
    { to: routes.LIBRARY, text: 'Library' },
    { to: routes.RESULTS, text: 'Results' },
    { to: routes.USERS, text: 'Users' }
];

export const libraryTabs = [
    { to: routes.LIBRARY_TESTS, text: 'Tests' },
    { to: routes.LIBRARY_TOPICS, text: 'Topics' }
];

export const groupTabs = [
    { to: routes.GROUP_TESTEE_LIST, text: 'Testee list' },
    { to: routes.GROUP_TESTS, text: 'Group tests' }
];

export const fetchOptions = {
    headers: {
        'content-type': 'application/json; charset=UTF-8;',
        Accept: 'application/json, text/javascript, */*; q=0.01'
    },
    credentials: 'same-origin'
};