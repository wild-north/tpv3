import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './store';
import { Provider } from 'react-redux';
import 'styles/styles.css';

ReactDOM.render(
    <Provider store={ configureStore() }>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
