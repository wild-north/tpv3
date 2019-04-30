import { isEqual } from 'lodash';
import { createSelectorCreator, defaultMemoize } from 'reselect';
import { connect } from 'react-redux';

export const createAction = type => payload => ({ type, payload });

export const createSelector = createSelectorCreator(
    defaultMemoize,
    isEqual
);

export const mapSelectorToConnector = selector => state => selector(state);

export const createConnectorForSelector = (selector = null, actions = null) => connect(
    selector ? mapSelectorToConnector(selector) : selector,
    actions
);

export const createConnector = createConnectorForSelector;
