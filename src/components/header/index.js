import React from 'react';
import { header } from './style.module.css';

export const Header = (props) => {
    const { fullName } = props;

    return (
        <div className={ header }>
            { fullName ? `Welcome, ${fullName}` : 'Header' }
        </div>
    );
};