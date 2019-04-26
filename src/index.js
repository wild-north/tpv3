import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './store';
import { Provider } from 'react-redux';

const appStore = configureStore();

ReactDOM.render(
    <Provider store={ appStore }>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

