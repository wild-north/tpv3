import React from 'react';
import { header } from './style.module.css';
import { NavTabs } from 'components/nav-tabs';

export const Header = (props) => {
    const { fullName, navTabs } = props;

    return (
        <div className={ header }>
            { fullName ? `Welcome, ${fullName}` : ' ' }
            <NavTabs items={ navTabs }/>
        </div>
    );
};
