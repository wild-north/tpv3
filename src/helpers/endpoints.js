import { isFunction, isEmpty, reduce } from 'lodash';

export const getContextPath = () => document.location.pathname.split('/')[1];

export const contextify = url => {
    //if arg is not passed or it is a factory or it is an absolute path
    if (isEmpty(url) || isFunction(url) || url.charAt(0) === '/') {
        return url;
    }
    console.log('/' + getContextPath() + '/' + url);

    return '/' + getContextPath() + '/' + url;
};

export const passParamsIntoEndpoint = (endpoint, params) => contextify(
    reduce(params, (result, value, key) =>
        result.replace(`:${key}`, value), endpoint)
);