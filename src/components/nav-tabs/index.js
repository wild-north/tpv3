import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { map } from 'lodash';
import * as styles from './style.module.css';

export const NavTabs = ({ items, classNames }) => {
    return (
        <ul className={ classNames.tab || 'tab' }>
            {
                map(items, (item, index) => (
                    <li className={ classNames.tabItem || styles['tab-item'] } key={ index }>
                        <NavLink to={ item.to }
                                 activeClassName={ styles.active }>
                            { item.text }
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    );
};

NavTabs.defaultProps = {
    classNames: {}
};

NavTabs.propTypes = {
    classNames: PropTypes.shape({
        tab: PropTypes.string,
        tabItem: PropTypes.string,
        active: PropTypes.string
    })
};