import React from 'react';
import DynamicBreadcrumbs from 'react-router-dynamic-breadcrumbs';
import { breadcrumbsRoutes } from 'config';
import PropTypes from 'prop-types';
import * as styles from './style.module.css';

export const Breadcrumbs = () => {

    return (
        <div className={ styles['holder'] }>
            <DynamicBreadcrumbs mappedRoutes={ breadcrumbsRoutes }/>
        </div>
    );
};

Breadcrumbs.propTypes = {
    mappedRoutes: PropTypes.object.isRequired
};