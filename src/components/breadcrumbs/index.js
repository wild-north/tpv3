import React from 'react';
import DynamicBreadcrumbs from 'react-router-dynamic-breadcrumbs';
import PropTypes from 'prop-types';
import * as styles from './style.module.css';


export const Breadcrumbs = ({ mappedRoutes }) => {
    return (
        <div className={ styles['holder'] }>
            <DynamicBreadcrumbs mappedRoutes={ mappedRoutes }/>
        </div>
    );
};

Breadcrumbs.propTypes = {
    mappedRoutes: PropTypes.object.isRequired
};