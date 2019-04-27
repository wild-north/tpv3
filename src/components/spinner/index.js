import React from 'react';
import * as styles from './style.module.css';
import classnames from 'classnames';

export const Spinner = ({ className }) => (
    <div className={ classnames(styles['lds-spinner'], className) }>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
    </div>
);
