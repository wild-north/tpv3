import { isFunction } from 'lodash';

export const createAction = type => payload => ({
    type,
    payload
});

export const getContextPath = () => document.location.pathname.split('/')[1];

export const contextify = url => {
    //if no arg passed or its factory or its absolute path
    if (url == null || isFunction(url) || 0 === url.indexOf('/')) {
        return url;
    }

    return '/' + getContextPath() + '/' + url;
};