import React from 'react';
import * as styles  from './style.module.css';
import { Link } from 'react-router-dom';
import { INITIAL } from 'routes/constants';

export const Error404 = () => (
    <div className={ styles.wrapper }>
        <div className={ styles.notfound }>
            <div className={ styles['notfound-message'] }>
                <h1 className={ styles.head }>Oops!</h1>
            </div>
            <h2 className={ styles['secondary-head'] }>404 - Page not found</h2>
            <p className={ styles.paragraph }>
                The page you are looking for might have been removed had its name changed or is temporarily
                unavailable.
            </p>
            <Link to={ INITIAL } className={ styles.link }>Go To Homepage</Link>
        </div>
    </div>
);