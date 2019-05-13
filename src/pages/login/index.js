import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as styles  from './style.module.css';
import classnames from 'classnames';

export const Login = ({ submit }) => {
    const [ email, setEmail ] = useState('denys_grynov@epam.com');
    const [ password, setPassword ] = useState('');

    const onSubmit = (ev) => {
        ev.preventDefault();

        submit({email, password});
    };

    return (
        <div className={ styles.holder }>
            <form className={ styles.form }
                onSubmit={ onSubmit }>
                <h3 className={ styles.header }>Welcome!</h3>
                <div className={ styles.row }>
                    <span className={ styles.label }>
                        <label htmlFor="email">Email</label>
                    </span>
                    <input type="email"
                           id="email"
                           className={ styles.input }
                           onChange={ (ev) => setEmail(ev.target.value) }
                           value={ email }
                           required/>
                </div>
                <div className={ classnames(styles.row, styles.disabled) }>
                    <span className={ styles.label }>
                        <label htmlFor="password"
                               className={ styles.label }>Password</label>
                    </span>
                    <input type="password"
                           id="password"
                           className={ styles.input }
                           onChange={ (ev) => setPassword(ev.target.value) }
                           value={ password }
                           disabled/>
                </div>

                <div className={ classnames(styles.row, styles['submit-holder']) }>
                    <button type="submit" className={ styles.submit }>Login</button>
                </div>

            </form>
        </div>
    );
};

Login.propTypes = {
    submit: PropTypes.func.isRequired
};
