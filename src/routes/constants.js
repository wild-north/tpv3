import { contextify } from 'helpers/endpoints';

const context = contextify('/');

export const createEndpoint = path => context + path;

export const INITIAL_PAGE = context;

export const LOGIN_PAGE = createEndpoint('login');

export const PROFILE_PAGE = createEndpoint('profile/:id');

export const ADMIN_PROFILE = createEndpoint('profile/:id/admin');
export const TESTEE_PROFILE = createEndpoint('profile/:id/testee');
export const CHECKER_PROFILE = createEndpoint('profile/:id/checker');
export const TEST_MANAGER_PROFILE = createEndpoint('profile/:id/test-manager');

export const GROUPS = createEndpoint('groups');
export const GROUP_DETAILS = createEndpoint('groups/:id');
export const GROUP_TESTEE_LIST = createEndpoint('groups/:id/testee-list');
export const GROUP_TESTS = createEndpoint('groups/:id/group-tests');
export const GROUP_ASSIGN_TEST = createEndpoint('groups/:id/assign-test');

export const LIBRARY = createEndpoint('library');
export const LIBRARY_TESTS = createEndpoint('library/tests');
export const LIBRARY_ADD_TEST = createEndpoint('library/add-test');

export const LIBRARY_TOPICS = createEndpoint('library/topics');
export const LIBRARY_ADD_TOPIC = createEndpoint('library/add-topic');

export const RESULTS = createEndpoint('results');

export const USERS = createEndpoint('users');
