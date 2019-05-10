import React from 'react';
import { NavLink } from 'react-router-dom';
import { map } from 'lodash';
import * as styles from './style.module.css';

export const NavTabs = ({ items }) => {
    return (
        <ul className="tabs">
            {
                map(items, (item, index) => (
                    <li className={ styles['tab-item'] } key={ index }>
                        <NavLink to={ item.to }
                                 activeClassName={ styles['active'] }>
                            { item.text }
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    );
};