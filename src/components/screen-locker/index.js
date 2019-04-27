import React from 'react';
import { Spinner } from 'components/spinner';
import { wrapper, spinner } from './style.module.css';

export const ScreenLocker = ({ predicate }) => {
    if (!predicate) {
        return null;
    }

    return (
        <div className={ wrapper }>
            <Spinner className={ spinner }/>
        </div>
    );
};
