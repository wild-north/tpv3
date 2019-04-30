import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { configureStore } from './store';
import { Provider } from 'react-redux';
import 'styles/styles.css';
import { Router } from 'react-router';
import { history } from 'routes/history';

ReactDOM.render(
    <Provider store={ configureStore() }>
        <Router history={ history }>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
