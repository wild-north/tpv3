import { isEqual, isFunction } from 'lodash';
import { createSelectorCreator, defaultMemoize } from 'reselect';
import { connect } from 'react-redux';

export const createAction = type => payload => ({ type, payload });

export const getContextPath = () => document.location.pathname.split('/')[1];

export const contextify = url => {
    //if no arg passed or its factory or its absolute path
    if (url == null || isFunction(url) || 0 === url.indexOf('/')) {
        return url;
    }

    return '/' + getContextPath() + '/' + url;
};

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