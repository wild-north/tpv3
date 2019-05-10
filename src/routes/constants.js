import { contextify } from 'helpers/endpoints';

const context = contextify('/');

export const createEndpoint = path => context + path;

export const INITIAL_PAGE = context;
export const PROFILE_PAGE = createEndpoint('profile/:id');

export const ADMIN_PROFILE = createEndpoint('profile/:id/admin');
export const TESTEE_PROFILE = createEndpoint('profile/:id/testee');
export const CHECKER_PROFILE = createEndpoint('profile/:id/checker');
export const TEST_MANAGER_PROFILE = createEndpoint('profile/:id/test-manager');
